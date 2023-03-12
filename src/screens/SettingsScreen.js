import { Text, View, Button, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }

  return (
    <SafeAreaView>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Text>Estamos en SettingScreen</Text>
      <Button onPress={() => goToPage('Home')} title='Ir a HOME' />
    </SafeAreaView>
  )
}