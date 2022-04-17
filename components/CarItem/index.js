import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/ModelS.jpeg')}
      style={styles.image}
    >
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Pris fr. 500 000kr</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default CarItem
