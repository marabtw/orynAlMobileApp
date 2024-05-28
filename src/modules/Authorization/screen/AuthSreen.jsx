import { useRoute } from "@react-navigation/native"

import Layout from "@layout/Layout"

import Register from "../Register/Register"
import Login from "../Login/Login"
import Refresh from "../Refresh/Refresh"

const AuthSreen = () => {
  const route = useRoute()
  return (
    <Layout>
      {route.name === "login" ? (
        <Login />
      ) : route.name === "register" ? (
        <Register />
      ) : (
        <Refresh />
      )}
    </Layout>
  )
}

export default AuthSreen
