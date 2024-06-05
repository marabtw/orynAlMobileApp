import { createContext, useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"

import { NAVIGATIONS } from "@navigation/Navigation.config"
import { isObjectEmpty } from "@utils/index"

import { createByUserOrder } from "@modules/Order/api"
import { useToast } from "@hooks/useToast"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const showNotification = useToast()
  const navigation = useNavigation()

  const [cartData, setCartData] = useState({
    tableId: -1,
    foods: [],
    totalSum: 0,
    restaurantId: -1,
    status: "booked",
    date: "",
  })

  useEffect(() => {
    const totalSum = cartData.foods.reduce(
      (acc, item) => acc + item?.itemTotalPrice,
      0
    )
    setCartData((prev) => ({
      ...prev,
      totalSum,
    }))
  }, [cartData.foods])

  const setDateAndTimeToCart = ({ date, time, restaurantId }) => {
    const formattedDateAndTime = `${date}T${time}:00`
    if (cartData.restaurantId < 0) {
      setCartData({
        tableId: -1,
        foods: [],
        totalSum: 0,
        restaurantId,
        status: "booked",
        date: formattedDateAndTime,
      })
    } else if (cartData.restaurantId !== restaurantId) {
      showConfirmationDialog(() => {
        setCartData({
          tableId: -1,
          foods: [],
          totalSum: 0,
          restaurantId,
          status: "booked",
          date: formattedDateAndTime,
        })
      })
    } else {
      setCartData((prev) => {
        return { ...prev, date: formattedDateAndTime }
      })
    }
  }

  const setTableIdToCart = ({ tableId, restaurantId }) => {
    console.log(tableId)
    if (cartData.restaurantId < 0) {
      setCartData({
        tableId: tableId,
        foods: [],
        totalSum: 0,
        restaurantId,
        status: "booked",
        date: "",
      })
    } else if (cartData.restaurantId !== restaurantId) {
      showConfirmationDialog(() => {
        setCartData({
          tableId: tableId,
          foods: [],
          totalSum: 0,
          restaurantId,
          status: "booked",
          date: "",
        })
      })
    } else {
      setCartData((prev) => {
        return { ...prev, tableId: tableId }
      })
    }
  }

  const setFoodForCart = ({ food, restaurantId }) => {
    if (!food || isObjectEmpty(food)) {
      showNotification("Такой еды нету в меню", "warning")
      return
    }

    if (cartData.restaurantId < 0) {
      setCartData({
        tableId: -1,
        foods: [food],
        totalSum: 0,
        restaurantId,
        status: "booked",
        date: "",
      })
      return
    } else if (cartData.restaurantId !== restaurantId) {
      showConfirmationDialog(() => {
        setCartData({
          tableId: -1,
          foods: [food],
          totalSum: 0,
          restaurantId,
          status: "booked",
          date: "",
        })
      })
      return
    }

    const isFoodInCart = cartData.foods.some((item) => item.id === food.id)

    if (!isFoodInCart) {
      setCartData((prev) => {
        return { ...prev, foods: [...prev.foods, food] }
      })
    } else {
      setCartData((prev) => {
        return {
          ...prev,
          foods: [...prev.foods.filter((order) => order.id !== food.id)],
        }
      })
    }
  }

  const increase = (foodId) => {
    const isFoodInCart = cartData.foods.some((item) => item.id === foodId)
    if (isFoodInCart) {
      setCartData((prev) => ({
        ...prev,
        foods: prev.foods.map((food) => {
          if (food.id === foodId) {
            const newAmount = food.amount + 1
            return {
              ...food,
              amount: newAmount,
              itemTotalPrice: food.price * newAmount,
            }
          } else {
            return { ...food }
          }
        }),
      }))
    } else {
      showNotification("Такой еды нету в корзине", "warning")
    }
  }

  const decrease = (foodId) => {
    let needFilter = false
    const updatedCart = cartData.foods.map((food) => {
      if (food.id === foodId) {
        const newAmount = food.amount - 1
        if (newAmount > 0) {
          needFilter = false
          return {
            ...food,
            amount: newAmount,
            itemTotalPrice: food.price * newAmount,
          }
        } else {
          needFilter = true
          return null
        }
      }
      return food
    })
    if (needFilter) {
      setCartData((prev) => {
        return { ...prev, foods: updatedCart.filter((order) => order !== null) }
      })
      return
    }
    setCartData((prev) => {
      return { ...prev, foods: updatedCart }
    })
  }

  const createOrder = () => {
    if (!isOrderValid()) {
      showNotification("Корзина не валидна", "warning")
      return
    }
		console.log(cartData)

    createByUserOrder(formattedDataForCreateOrder)
      .then(() => {
        showNotification("Успешно забронирован", "success")
        navigation.navigate(NAVIGATIONS.Main.HomeStack.home)
      })
      .catch((err) => {
        showNotification(`Не удалось создать заказ, ${err.toString()}`, "error")
      })
  }

  const isOrderValid = () => {
    return (
      cartData.restaurantId &&
      cartData.restaurantId > 0 &&
      cartData?.tableId >= 0 &&
      cartData?.foods.length > 0 &&
      cartData.date &&
      cartData.totalSum > 0 &&
      cartData.status
    )
  }

  const showConfirmationDialog = (onConfirm) => {
    Alert.alert(
      "Confirmation",
      "Вы уверены, что хотите удалить заказы из предыдущего ресторана и добавить новые?",
      [
        {
          text: "Нет",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Да",
          onPress: onConfirm,
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <CartContext.Provider
      value={{
        cartData,
        createOrder,
        setFoodForCart,
        setDateAndTimeToCart,
        setTableIdToCart,
        increase,
        decrease,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
