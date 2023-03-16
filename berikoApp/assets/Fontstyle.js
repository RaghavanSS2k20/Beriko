import React from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from '@expo-google-fonts/nunito';
import { useFonts as useNotoSansFonts } from '@expo-google-fonts/noto-sans';

const useCustomFonts = async () => {
  await useFonts({
    'nunito-regular': require('@expo-google-fonts/nunito'),
    'nunito-bold': require('@expo-google-fonts/nunito'),
  });

  await useNotoSansFonts({
    'noto-sans-regular': require('@expo-google-fonts/noto-sans'),
    'noto-sans-bold': require('@expo-google-fonts/noto-sans'),
  });
};

const FontStyles = () => {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }
  const styles = StyleSheet.create({
    nunitoRegular: {
      fontFamily: 'nunito-regular',
      fontWeight: '400',
    },
    nunitoBold: {
      fontFamily: 'nunito-bold',
      fontWeight: '700',
    },
    notoSansRegular: {
      fontFamily: 'noto-sans-regular',
      fontWeight: '400',
    },
    notoSansBold: {
      fontFamily: 'noto-sans-bold',
      fontWeight: '700',
    },
  });
  return null;

}
export default FontStyles;
    