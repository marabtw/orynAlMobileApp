import { useNavigation } from "@react-navigation/native"
import { useContext, useRef } from "react"
import { View, Text, Pressable } from "react-native"
import { UIContext } from "../../app/Context/UIContext"
import styled from "styled-components/native"
// [
// 	{
// 		action: "удалить",
// 		onClick: () => {},
// 	},
// 	{
// 		action: "посмотреть",
// 		to: "/",
// 		id,
// 	}
// ]

const ContextMenu = ({ menuActions = [] }) => {
  const { setOpenedContextMenuIndex } = useContext(UIContext)
  const navigation = useNavigation()

  return (
    <Container>
      {menuActions.map((menuAction) =>
        menuAction.hasOwnProperty("to") ? (
          <Pressable
            key={menuAction.action + `${Math.random() * 99999999}`}
            onPress={() => {
              navigation.navigate(menuAction.to, { id: menuAction.id })
              setOpenedContextMenuIndex(null)
            }}
            style={{ paddingVertical: 5 }}
          >
            {({ pressed }) => (
              <Text style={{ color: pressed ? "#ff0000" : "#000" }}>
                {menuAction.action}
              </Text>
            )}
          </Pressable>
        ) : (
          <Pressable
            key={menuAction.action + `${Math.random() * 99999999}`}
            onPress={() => {
              menuAction.onPress()
              setOpenedContextMenuIndex(null)
            }}
            style={{ minWidth: 100, paddingVertical: 5 }}
          >
            {({ pressed }) => (
              <Text style={{ color: pressed ? "#ff0000" : "#000" }}>
                {menuAction.action}
              </Text>
            )}
          </Pressable>
        )
      )}
    </Container>
  )
}

const Container = styled.View`
  position: absolute;
  top: 0;
  right: -15px;
  transform: translate(-30px, 30px);
  flex-direction: column;
  width: 150px;
  padding: 10px 10px;
  border-width: 2px;
  border-color: #ebebeb;
  border-radius: 5px;
  background-color: white;
  z-index: 50;
  flex: 1;
`

export default ContextMenu
