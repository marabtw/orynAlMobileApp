import { Image, Text, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { useContext, useRef } from "react"
import { UIContext } from "../../app/Context/UIContext"
import styled from "styled-components/native"
import ContextMenu from "../ContextMenu/ContextMenu"
import { MoreVerticalIcon } from "../../ui/icons/icons"

const ListItem = ({ elementData = {}, menuActions = [], index }) => {
  const { openedContextMenuIndex, setOpenedContextMenuIndex } = useContext(UIContext)
  const containerRef = useRef(null)

  const handleContextMenu = () => {
    if (openedContextMenuIndex === index) {
      setOpenedContextMenuIndex(null)
    } else {
      setOpenedContextMenuIndex(index)
    }
  }

  const handleClickOutside = () => {
    setOpenedContextMenuIndex(null)
  }

  return (
    <TouchableWithoutFeedback onPress={handleClickOutside}>
      <Container index={index} ref={containerRef}>
        {Object.keys(elementData)?.map((key) =>
          key === "id" ? (
            <View
              key={elementData[key]}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{elementData[key]}</Text>
              <TouchableOpacity
                style={{
                  width: 30,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
                onPress={handleContextMenu}
              >
                <MoreVerticalIcon size={20} color="#666" />
              </TouchableOpacity>
              {openedContextMenuIndex === index && (
                <ContextMenu menuActions={menuActions} />
              )}
            </View>
          ) : (
            <View
              key={elementData[key]}
              style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
            >
              <Text>{rename(key)}</Text>
              {key === "image" ? (
                <Image source={elementData.image} style={{width: 35, aspectRatio: 1/1, borderRadius: 8}}/>
              ) : (
                <Text>
                  {key === "status"
                    ? elementData[key]
                      ? "Активный"
                      : "Неактивный"
                    : key === "available"
                    ? elementData[key]
                      ? "Да"
                      : "Нет"
                    : elementData[key]}
                </Text>
              )}
            </View>
          )
        )}
      </Container>
    </TouchableWithoutFeedback>
  )
}

const rename = (key) => translations[key] || key

const translations = {
  name: "Имя",
  surname: "Фамилия",
  callNumber: "Телефон",
  email: "Почта",
  address: "Адрес",
  city: "Город",
  owner: "Владелец",
  status: "Статус",
  image: "Фото",
  type: "Тип",
  capacity: "Вместимость",
  description: "Описание",
  price: "Цена",
  available: "В наличии",
}

const Container = styled.View`
  position: relative;
  padding: 15px 15px;
  border-radius: 15px;
  background-color: white;
  margin-top: ${({ index }) => (index !== 0 ? "10px" : "0px")};
  gap: 10px;
`

export default ListItem
