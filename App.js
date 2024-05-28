import { NavigationContainer } from "@react-navigation/native"
import { AuthContextProvider } from "@context/AuthContext"
import TabNavigation from "@tabNavigation/TabNavigation"

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <TabNavigation />
      </AuthContextProvider>
    </NavigationContainer>
  )
}
