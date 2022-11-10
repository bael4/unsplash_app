import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/dimension';

export const styles = StyleSheet.create({
  unsplash_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    width: windowWidth * 1,
    height: 200,
    borderBottomRightRadius: 20,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  unsplash_info: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  user_name: {
    color: '#fff',
    textShadowColor: 'red',
  },

  container: {
    alignItems: 'center',
  },
  image: {
    height: windowHeight * 1,
    width: windowWidth * 1,
  },
  unsplash_card: {
    paddingTop: 10,
  },
});
