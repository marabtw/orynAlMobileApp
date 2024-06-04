import { useState, useEffect } from "react"
import { View, ScrollView, StyleSheet, Text } from "react-native"

import { axios } from "@lib/axios"
import {
  getTableCategoriesRequest,
  getAllTablesRequest,
} from "@modules/Order/api"

import { useToast } from "@hooks/useToast"
import useCart from "@hooks/useCart"

import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"
import TableCard from "./components/TableCard"
import Pagination from "@components/Pagination/Pagination"

const TableReservation = ({ restaurantId }) => {
  const showNotification = useToast()
  const { cartData, setTableIdForCart } = useCart()

  const [tables, setTables] = useState([])
  const [selectedTableId, setSelectedTableId] = useState("")
  const [categories, setCategories] = useState([])

  const [totalItems, setTotalItems] = useState(0)
  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 8,
    q: "",
    date: "",
  })

  useEffect(() => {
    setParams((prev) => ({ ...prev, date: cartData.date }))
  }, [cartData.date])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    getTableCategoriesRequest({
      restaurantId,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        if (!data) setCategories([])
        else {
          setCategories([
            { forShow: "Все", value: "" },
            ...data.map((item) => ({ forShow: item, value: item })),
          ])
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

    getAllTablesRequest({
      restaurantId,
      params,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        if (!data || data.items?.length === 0) setTables([])
        else {
          setTables(data.items)
          setTotalItems(data.totalItems)
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          setTables([])
          showNotification(
            `Не удалось загрузить столы, ${err.toString()}`,
            "error"
          )
        }
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [params])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SortByCategoryContainer
        categories={categories}
        style={styles.sortContainer}
        getCategory={(value) => setParams((prev) => ({ ...prev, q: value }))}
      />
      {tables?.length > 0 ? (
        <View style={styles.grid}>
          {tables.map((table) => (
            <View key={table.id} style={styles.tableCardContainer}>
              <TableCard
                tableData={table}
                selectedTableId={selectedTableId}
                onPress={(id) => {
                  console.log(id)
                  setSelectedTableId(id)
                }}
              />
            </View>
          ))}
        </View>
      ) : (
        <View style={{ width: "100%", justifyContent: "center" }}>
          <Text>Не найдены</Text>
        </View>
      )}
      <Pagination
        totalPage={Math.ceil(totalItems / params.limit)}
        getCurrentPage={(index) =>
          setParams((prev) => ({ ...prev, pageIndex: index }))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
		gap: 20,
  },
  tableCardContainer: {
    flex: 1,
    justifyContent: "center",
  },
})

export default TableReservation
