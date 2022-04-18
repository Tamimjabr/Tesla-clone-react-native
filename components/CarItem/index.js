import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import CustomButton from '../CustomButton'
import styles from './styles'

const CarItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.titles}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton type='primary' text='Preview' />
          <CustomButton type='secondary' text='Custom Order' />
        </View>
      </ImageBackground>
    </View>
  )
}

export default CarItem
