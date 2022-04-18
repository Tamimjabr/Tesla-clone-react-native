import React from 'react'
import { Alert, Pressable, Text } from 'react-native'
import styles from './styles'

const CustomButton = ({ type = 'primary', text = '', onPress }) => {
  const backgroundColor = type === 'primary' ? '#5c5e62' : '#fff'
  const color = type === 'primary' ? '#fff' : '#5c5e62'
  return (
    <Pressable
      style={[styles.button, { backgroundColor }]}
      android_ripple={{ color: 'black', radius: 15 }}
      onPress={onPress}
    >
      <Text style={[styles.title, { color }]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton
