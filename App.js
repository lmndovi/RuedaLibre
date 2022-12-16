import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#800000" },
          }}
        />
        <Drawer.Screen
          name="Events"
          component={EventsScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#00162d" },
          }}
        />
        <Drawer.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitleStyle: { color: "#00162d" },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
