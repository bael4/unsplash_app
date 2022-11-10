import {Image, SafeAreaView, Text, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {windowHeight, windowWidth} from '../utils/dimension';

const FullImage = ({route}) => {
  const {image} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {image ? (
        <Image
          style={st.img}
          source={{
            uri: image,
          }}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default FullImage;

// Пришлось прописать стили для картинки здесь, не происходил рендер

const st = StyleSheet.create({
  img: {
    width: windowWidth * 1,
    height: windowHeight * 1,
  },
});
