import React from 'react'
import styles from './styles'
import cars from './cars'
import { Text, View, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem'

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        // ListEmptyComponent={<Text>No cars</Text>}
        // ListFooterComponent={
        //   <Text style={styles.footer}>Stay tuned for more models</Text>
        // }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CarItem
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
        snapToAlignment='start'
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
  )
}

export default CarsList
