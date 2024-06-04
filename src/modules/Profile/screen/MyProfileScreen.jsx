import { useContext } from "react"

import { AuthContext } from "@context/AuthContext"

import Layout from "@layout/Layout"
import MyProfile from "../myProfile/MyProfile"
import NoAuthed from "../noAuthed/NoAuthed"

const MyProfileScreen = () => {
  const { isAuthed } = useContext(AuthContext)

  return (
    <Layout>
      {!isAuthed ? <NoAuthed /> : <MyProfile isAuthed={isAuthed} />}
    </Layout>
  )
}

export default MyProfileScreen
