import { useState } from "react"
import { View, Modal, TouchableOpacity, Text } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"

const FormSelect = ({
  placeholder = "Иван Петров",
  options = [{ value: "...", key: "..." }],
  search = false,
	width,
	label,
}) => {
  const [selected, setSelected] = useState("")
  const [dropdownVisible, setDropdownVisible] = useState(false)

  return (
    <View style={{borderWidth: 2, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, borderColor: "#EBEBEB", width: width ? width : ""}}>
      <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-between"}} onPress={() => setDropdownVisible(true)}>
        <Text style={{color: "#777"}}>{selected || placeholder}</Text>
				<Text style={{color: "#999"}}> ▼</Text>
      </TouchableOpacity>
      <Modal visible={dropdownVisible} transparent>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "black",
              opacity: 0.3,
            }}
            onPress={() => setDropdownVisible(false)}
          />
          <View style={{ backgroundColor: "white", padding: 10, width: "90%", borderRadius: 10 }}>
            <SelectList
              setSelected={(val) => {
                setSelected(val)
                setDropdownVisible(false)
              }}
              data={options}
              save="value"
              search={search}
              boxStyles={{}}
              placeholder={label}
							maxHeight={500}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default FormSelect
