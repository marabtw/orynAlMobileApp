import { useState, useEffect, useCallback } from "react"
import { View, Text } from "react-native"
import { axios } from "@lib/axios"

import { getAllRestaurantsRequest } from "../api"

import { useToast } from "@hooks/useToast"
import { useLoading } from "@hooks/useLoading"
import { isArraysEqualDeep } from "@utils/index"

import RestaurantCard from "./components/RestaurantCard"
import Pagination from "@components/Pagination/Pagination"

const Restaurants = () => {
  const showNotification = useToast()
  const setLoading = useLoading()
  const [restaurants, setRestaurants] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 10,
  })

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()
    fetchData(cancelTokenSource.token)
    return () => {
      cancelTokenSource.cancel()
    }
  }, [params])

  const fetchData = async (cancelToken) => {
    // setLoading(true)
    try {
      const { data } = await getAllRestaurantsRequest({
        params,
        cancelToken,
      })
      if (!data.items || data.items.length === 0) {
        setRestaurants([])
        showNotification("Рестораны не найдены", "info")
      } else {
        const filteredItems = data.items.map(({ role, ...rest }) => rest)
        if (!isArraysEqualDeep(restaurants, filteredItems)) {
          setRestaurants(filteredItems)
        }
      }
      const newTotalPage = Math.ceil(data?.totalItems / params.limit) || 0
      setTotalPage(newTotalPage)
    } catch (err) {
      if (axios.isCancel(err)) {
        showNotification("Запрос был отменен", "warning")
      } else {
        showNotification(err.toString(), "error")
      }
    } finally {
      // setLoading(false)
    }
  }

  const handlePageChange = (index) => {
    setParams((prev) => ({ ...prev, pageIndex: index }))
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        marginTop: 10,
        paddingHorizontal: 15,
        paddingBottom: 20,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 18, paddingVertical: 15 }}>
        Рестораны
      </Text>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        {restaurants?.length > 0 ? (
          restaurants.map((el) => <RestaurantCard restaurant={el} />)
        ) : (
          <Text>Рестораны не найдены</Text>
        )}
      </View>
      <Pagination
        totalPage={totalPage}
        getCurrentPage={(value) => handlePageChange(value)}
      />
    </View>
  )
}

export default Restaurants
