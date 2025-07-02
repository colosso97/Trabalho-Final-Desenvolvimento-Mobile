import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import Detalhe from "../screens/Detalhe";
import Login from "../screens/Login";
import { AuthContext } from "../context/AuthContext";
import TelaSplash from "../screens/Splash/TelaSplash";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppTabs() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ededed",
        tabBarInactiveBackgroundColor: "#7abfcf",
        tabBarActiveBackgroundColor: "#517d86",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Detalhe"
        component={Detalhe}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="file-text" color={color} size={size} />
          ),
        }}
      />
      {isAuthenticated ? (
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={TelaSplash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
