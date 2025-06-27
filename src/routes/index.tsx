import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Home from '../screens/Home';
import Perfil from '../screens/Detalhe';
import Detalhe from '../screens/Detalhe';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();
export default function AppRouter() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#555555",
                tabBarInactiveBackgroundColor: "#7abfcf",
                tabBarActiveBackgroundColor: "#517d86",
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} />;
                    },
                }}
            />
            <Tab.Screen
                name="Detalhe"
                component={Detalhe}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="file-text" color={color} size={size} />;
                    },
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="user" color={color} size={size} />;
                    },
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="user" color={color} size={size} />;
                    },
                }}
            />
        </Tab.Navigator>
    )
}