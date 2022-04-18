import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
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
  },
  buttonsContainer: {
    width: '100%',
    minHeight: 60,
    height: '14%',
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
