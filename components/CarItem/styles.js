import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    width: '100%',
    minHeight: 70,
    height: '12%',
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
})

export default styles
