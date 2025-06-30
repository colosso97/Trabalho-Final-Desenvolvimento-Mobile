import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes'
import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle={'default'} />
        <AppRouter />
      </NavigationContainer>
    </AuthProvider>

  )
}
