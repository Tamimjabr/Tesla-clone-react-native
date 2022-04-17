import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import CarItem from './components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
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
  },
  carContainer: {
    width: '100%',
    height: '100%'
  },
  titles: {
    width: '100%',
    marginTop: '30%',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    resizeMode: 'cover'
  }
})
