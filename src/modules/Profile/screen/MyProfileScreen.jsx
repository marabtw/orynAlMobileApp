import { useContext } from "react"

import { isObjectEmpty } from "@utils"
import { AuthContext } from "@context/AuthContext"

import Layout from "@layout/Layout"
import MyProfile from "../myProfile/MyProfile"
import NoAuthed from "../noAuthed/NoAuthed"

const MyProfileScreen = () => {
  const { user, isAuthed } = useContext(AuthContext)

	console.log(isAuthed)
	console.log(user)

  return (
    <Layout>
      {!isAuthed ? <NoAuthed /> : <MyProfile isAuthed={isAuthed} />}
    </Layout>
  )
}

export default MyProfileScreen
