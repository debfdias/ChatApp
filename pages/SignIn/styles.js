import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageBox: {
    width: 100,
    height: 100,
  },
  data: {
    marginHorizontal: 32,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 30,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  input: {
    marginTop: 23,
    height: 50,
    borderWidth: 2,
    borderColor: '#2BDA8E',
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: 'bold',
  },
  arrowButton: {
    alignItems: 'flex-end',
    marginTop: 64,
  },
  arrow: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#2BDA8E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
  arrowImage: {
    width: 70,
    height: 70,
  },
});
export default styles;