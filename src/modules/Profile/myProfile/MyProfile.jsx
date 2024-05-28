import { useContext, useEffect, useState } from "react"
import { View, ScrollView, Text, StyleSheet } from "react-native"
import { axios } from "@lib/axios"

import {
  getProfileRequest,
  deleteProfileRequest,
  updateProfileRequest,
} from "../api"
import { Button } from "@rneui/base"
import { LinearGradient } from "expo-linear-gradient"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import { Ionicons } from "@ui/icons/icons"
import { AuthContext } from "@context/AuthContext"
import UpdateProfile from "./components/UpdateProfile"

const MyProfile = ({ isAuthed }) => {
  const { deleteUser } = useContext(AuthContext)
  const [userData, setUserData] = useState({})
  const [editOpen, setEditOpen] = useState(false)

  useEffect(() => {
    // setLoading(true)
    const cancelTokenSource = axios.CancelToken.source()
    getProfileRequest({ cancelToken: cancelTokenSource.token })
      .then(({ data }) => {
        setUserData(data)
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          // showNotification("Запрос был отменен", "warning")
        } else {
          // showNotification(error.toString(), "err")
        }
      })
      .finally(() => {
        // setLoading(false)
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [isAuthed])

  useEffect(() => {
    isAuthed === false && setUserData({})
  }, [isAuthed])

  const toggleEditButton = () => {
    setEditOpen((prev) => setEditOpen(!prev))
  }

  return (
    <View
      style={{
        // paddingHorizontal: 20,
        flexDirection: "column",
        // gap: 15,
        // marginTop: 10,
        // backgroundColor: "white",
        // borderRadius: 8,
        // paddingTop: 10,
        flex: 1,
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: "#0c1b32",
          gap: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600", color: "#fafafa" }}>
          Профиль
        </Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Ionicons name="person-circle-outline" size={70} color={"#fafafa"} />
          <View
            style={{
              flexDirection: "column",
              gap: 2,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 14, color: "#fafafa" }}>
              Привет
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "600", color: "#fafafa" }}
            >{`${userData?.name} ${userData?.surname}`}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: "#0c1b32",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            gap: 15,
            paddingTop: 30,
            paddingHorizontal: 20,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            overflow: "hidden",
            backgroundColor: "#fafafa",
          }}
        >
          <Button
            title="Редактировать"
            titleStyle={{ fontWeight: "bold", fontSize: 16 }}
            buttonStyle={{
              borderRadius: 8,
              paddingHorizontal: 20,
              maxWidth: "100%",
              width: "100%",
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#62ADFC", "#4379FB"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => toggleEditButton()}
          />
          {!editOpen && (
            <View style={{ gap: 15 }}>
              <View style={styles.prevData}>
                <Text style={styles.prevDataLabel}>Почта</Text>
                <Text style={styles.prevDataInfo}>{userData?.email}</Text>
              </View>
              <View style={styles.prevData}>
                <Text style={styles.prevDataLabel}>Телефон номер</Text>
                <Text style={styles.prevDataInfo}>{userData?.phone}</Text>
              </View>
            </View>
          )}
          {editOpen && <UpdateProfile />}
        </View>
        {!editOpen && (
          <Button
            title="Выйти"
            titleStyle={{ fontWeight: "bold", fontSize: 16 }}
            icon={{
              name: "log-out-outline",
              type: "ionicon",
              size: 15,
              color: "white",
            }}
            buttonStyle={{
              borderRadius: 8,
              paddingHorizontal: 20,
              width: "100%",
            }}
            containerStyle={{
              position: "absolute",
              bottom: "3%",
              left: 0,
              width: "100%",
							paddingHorizontal: 20
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#FF5050", "#FF5050"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => deleteUser()}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  prevData: {
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#F0F6FF",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prevDataLabel: {
    fontWeight: "bold",
  },
  prevDataInfo: {},
})

export default MyProfile
