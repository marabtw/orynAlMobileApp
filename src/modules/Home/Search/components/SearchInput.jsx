import React, { useState, useEffect, useRef } from "react"
import { View, StyleSheet } from "react-native"

import { axios } from "@lib/axios"

import { SearchBar } from "@rneui/themed"
import { searchRestaurants } from "../../api"

const SeacrhInput = ({ getRestaurants = () => {} }) => {
  const searchBarRef = useRef(null)
  const [searchResult, setSearchResult] = useState([])

  const [searchParams, setSearchParams] = useState({
    q: "",
  })

  useEffect(() => {
    getRestaurants(searchResult)
  }, [searchResult])

  useEffect(() => {
    const cancelTokenSourceSource = axios.CancelToken.source()

    if (searchParams?.q?.length > 2) {
      // setLoading(true)
      searchRestaurants({
        searchParams,
        cancelToken: cancelTokenSourceSource.token,
      })
        .then(({ data }) => {
          setSearchResult(data.items)
        })
        .catch((err) => {
          if (!axios.isCancel(err)) {
            // showNotification("Запрос был отменен", "warning")
          } else {
            setSearchResult([])
            showNotification(err.toString(), "error")
          }
        })
        .finally(() => {
          // setLoading(false)
        })
    } else {
      setSearchResult([])
    }

    return () => {
      cancelTokenSourceSource.cancel()
    }
  }, [searchParams])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchBarRef.current) {
        searchBarRef.current.focus()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const updateSearch = (value) => {
    setSearchParams((prev) => ({ ...prev, q: value }))
  }

  return (
    <View style={styles.view}>
      <SearchBar
        ref={searchBarRef}
        round={2}
        containerStyle={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          position: "relative",
          paddingVertical: 8,
        }}
        inputContainerStyle={{
          backgroundColor: "#ebebeb",
          borderRadius: 8,
          paddingVertical: 0,
          height: 40,
        }}
        inputStyle={{ fontSize: 16 }}
        placeholder="Поиск Ресторана"
        onChangeText={updateSearch}
        value={searchParams.q}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "white",
    zIndex: 99,
  },
})

export default SeacrhInput
