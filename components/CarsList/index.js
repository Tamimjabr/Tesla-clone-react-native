import React from 'react'
import styles from './styles'
import cars from './cars'
import { Text, View, FlatList } from 'react-native'
import CarItem from '../CarItem'

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CarItem
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      ></FlatList>
    </View>
  )
}

export default CarsList
