import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import CarItem from './components/CarItem'
import ModelS from './assets/images/Model3.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        title={'Model S'}
        subTitle={'Pris fr. 500 000kr'}
        image={ModelS}
      />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
