import { NavigationContainer } from "@react-navigation/native"
import { AuthContextProvider } from "@context/AuthContext"
import TabNavigation from "@navigation/TabNavigation/TabNavigation"
import { TabBarVisibilityProvider } from "@context/TabBarContext"
import { CartContextProvider } from "@context/CartContext"
import { UIContextProvider } from "@context/UIContext"

export default function App() {
  return (
    <UIContextProvider>
      <NavigationContainer>
        <TabBarVisibilityProvider>
          <AuthContextProvider>
            <CartContextProvider>
              <TabNavigation />
            </CartContextProvider>
          </AuthContextProvider>
        </TabBarVisibilityProvider>
      </NavigationContainer>
    </UIContextProvider>
  )
}
