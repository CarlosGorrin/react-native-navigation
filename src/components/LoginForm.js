import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Password' />
      <Button title='Enviar' onPress={() => console.log('Enviado')} />
    </View>
  )
}