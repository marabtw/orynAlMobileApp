import { useRoute } from "@react-navigation/native"
import Layout from "@layout/Layout"
// import UpdateRestaurantForm from "../moduls/UpdateRestaurantForm/UpdateRestaurantForm"

const UpdateRestaurantScreen = () => {
  const { id } = useRoute().params

  return (
    <Layout>
      {/* <UpdateRestaurantForm /> */}
    </Layout>
  )
}

export default UpdateRestaurantScreen
