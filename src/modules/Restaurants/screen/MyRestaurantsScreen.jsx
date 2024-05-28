import Layout from "@layout/Layout"
// import PageHeading from "../ui/Heading/PageHeading"
import MyRestaurantsList from "../Owner/MyRestaurantsList/MyRestaurantsList"
import Search from "../Owner/MyRestaurantsList/components/Search"

const MyRestaurantsScreen = () => {
  return (
    <Layout>
      {/* <PageHeading location={"Мои рестораны"} /> */}
			<Search/>
      <MyRestaurantsList />
    </Layout>
  )
}

export default MyRestaurantsScreen
