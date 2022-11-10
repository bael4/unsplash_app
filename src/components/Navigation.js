import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullImage from '../screens/FullImage';
import UnsplashGallery from '../screens/UnsplashGallery';
import {fullImage, unsplashGallery} from './routes';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={unsplashGallery} component={UnsplashGallery} />
      <Stack.Screen name={fullImage} component={FullImage} />
    </Stack.Navigator>
  );
};

export default Navigation;
