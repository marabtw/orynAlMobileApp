import { View, ScrollView } from "react-native"
import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"

import { Button } from "@rneui/base"
import { LinearGradient } from "expo-linear-gradient"

const UpdateProfile = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flexDirection: "column", marginBottom: 0, paddingBottom: 0 }}
    >
      <View style={{ marginBottom: 10 }}>
        <FormInputTextWrapper label="Имя:" placeholder="Name" />
      </View>
      <View style={{ marginBottom: 10 }}>
        <FormInputTextWrapper label="Фамилия:" placeholder="Surname" />
      </View>
      <View style={{ marginBottom: 10 }}>
        <FormInputTextWrapper
          label="Почта:"
          type="email"
          placeholder="user@example.com"
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <FormInputTextWrapper
          label="Телефон номер:"
          type="tel"
          placeholder="+7 (777) 777 77 77"
        />
      </View>
      <Button
        title="Сохранить"
        titleStyle={{ fontWeight: "bold", fontSize: 16 }}
        buttonStyle={{
          borderRadius: 8,
          paddingHorizontal: 20,
          maxWidth: "70%",
          width: "100%",
          marginHorizontal: "auto",
          marginBottom: 10,
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#62acfc", "#457cfb"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
    </ScrollView>
  )
}

export default UpdateProfile
