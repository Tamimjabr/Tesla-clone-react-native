import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Pris fr. 500 000kr</Text>
        </View>
      </View>
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
    fontFamily: '#5c5e62'
  }
})
