import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Detalhe from '../screens/Detalhe';
import Login from '../screens/Login';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();
export default function AppRouter() {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
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
            {isAuthenticated ?
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <AntDesign name="user" color={color} size={size} />;
                        },
                    }}
                />
                :
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => {
                            return <AntDesign name="user" color={color} size={size} />;
                        },
                    }}
                />
            }


        </Tab.Navigator>
    )
}