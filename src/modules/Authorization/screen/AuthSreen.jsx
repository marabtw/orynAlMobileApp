import { useRoute } from "@react-navigation/native"

import Layout from "@layout/Layout"

import Register from "../Register/Register"
import Login from "../Login/Login"
import Refresh from "../Refresh/Refresh"
import { NAVIGATIONS } from "@navigation/Navigation.config"

const AuthSreen = () => {
  const route = useRoute()
  if (route.name === NAVIGATIONS.Profile.AuthStack.login) {
    return <Login />
  } else if (route.name === NAVIGATIONS.Profile.AuthStack.register) {
    return <Register />
  } else if (route.name === NAVIGATIONS.Profile.AuthStack.refresh) {
    return <Refresh />
  }
}

export default AuthSreen
