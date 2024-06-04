import React, { useState, useEffect } from "react"
import { View, ScrollView } from "react-native"

import { axios } from "@lib/axios"
import {
  getRestaurantMenuRequest,
  getMenuCategoriesRequest,
} from "@modules/Order/api"

import { useToast } from "@hooks/useToast"

import FoodCategoriesSlider from "./components/FoodCategoriesSlider"
import FoodCard from "./components/FoodCard"
import Pagination from "@components/Pagination/Pagination"

const SelectMenu = ({ restaurantId, getFoodForCart, selectedFoodsId }) => {
  const showNotification = useToast()

  const [menu, setMenu] = useState([])
  const [categories, setCategories] = useState([])

  const [totalItems, setTotalItems] = useState(0)
  const [params, setParams] = useState({ pageIndex: 0, limit: 8, q: "" })

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    getMenuCategoriesRequest({
      restaurantId,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        if (!data) setCategories([])
        else {
          setCategories(data)
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          setCategories([])
          showNotification(
            `Не удалось загрузить категории, ${err.toString()}`,
            "error"
          )
        }
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()
    getRestaurantMenuRequest({
      restaurantId,
      params,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        if (!data || data.items?.length === 0) setMenu([])
        else {
          setMenu(data.items)
          setTotalItems(data.totalItems)
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(
            `Не удалось загрузить меню, ${err.toString()}`,
            "error"
          )
        }
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [params])

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 20,
					gap: 20,
        }}
      >
        <FoodCategoriesSlider
          categories={categories}
          getCategory={(type) => {
            setParams((prev) => ({ ...prev, q: type }))
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          {menu?.map((food) => (
            <FoodCard
              key={food.id}
              foodData={food}
              getFoodForCart={getFoodForCart}
              selectedFoodsId={selectedFoodsId}
            />
          ))}
        </View>
      </View>
      <Pagination
        totalPage={Math.ceil(totalItems / params.limit)}
        getCurrentPage={(index) =>
          setParams((prev) => ({ ...prev, pageIndex: index }))
        }
      />
    </ScrollView>
  )
}

export default React.memo(SelectMenu)
