import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import BeginnersScreen from "./screens/BeginnersScreen";
import RuedaIntroScreen from "./screens/RuedaIntroScreen";
import RuedaBasicScreen from "./screens/RuedaBasicScreen";
import RuedaPlusScreen from "./screens/RuedaPlusScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// function MyStack() {
//   <Stack.Navigator initialRouteName="Landing">
//     <Stack.Screen
//       name="Landing"
//       component={LandingScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="Beginner"
//       component={BeginnersScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="Intro"
//       component={RuedaIntroScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="Basics"
//       component={RuedaBasicScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="Plus"
//       component={RuedaPlusScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//   </Stack.Navigator>;
// }

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
        <Drawer.Screen
          name="Classes"
          component={LandingScreen}
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
