import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getImages} from '../store/actions/unsplashAction';
import {styles} from '../screens/styles';

const UnsplashGallery = ({navigation}) => {
  const dispatch = useDispatch();
  const {images} = useSelector(state => state.unsplashReducer);
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const renderImages = images.map((el, index) => (
    <View key={index} style={styles.unsplash_card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FullImage', {
            imageId: el.id,
            image: el.urls.full,
          })
        }>
        <ImageBackground
          style={styles.images}
          source={{uri: el.urls.small}}
          resizeMode="cover">
          <View style={styles.unsplash_info}>
            <Text style={styles.user_name}>{el.user.name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  ));

  return (
    <SafeAreaView style={styles.unsplash_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderImages}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UnsplashGallery;
