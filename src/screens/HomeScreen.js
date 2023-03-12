import { Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToSettings = () => {
    navigation.navigate("Settings")
  }

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSettings} title='Ir a Ajustes' />
    </SafeAreaView>
  )
}