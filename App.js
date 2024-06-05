import { NavigationContainer } from "@react-navigation/native"
import { AuthContextProvider } from "@context/AuthContext"
import TabNavigation from "@navigation/TabNavigation/TabNavigation"
import { TabBarVisibilityProvider } from "@context/TabBarContext"
import { CartContextProvider } from "@context/CartContext"
import { UIContextProvider } from "@context/UIContext"

import ToastManager from "toastify-react-native"
// import Loading from "@components/Loading/Loading"
// import useLoading from "@hooks/useLoading"

export default function App() {
  // const { isLoading } = useLoading()
  return (
    <NavigationContainer>
      <UIContextProvider>
        <TabBarVisibilityProvider>
          <AuthContextProvider>
            <CartContextProvider>
              <TabNavigation />
              <ToastManager
                duration={2000}
                textStyle={{ fontSize: 14 }}
                height={40}
                positionValue={10}
              />
              {/* {isLoading && <Loading />} */}
            </CartContextProvider>
          </AuthContextProvider>
        </TabBarVisibilityProvider>
      </UIContextProvider>
    </NavigationContainer>
  )
}
