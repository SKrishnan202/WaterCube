import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const image = require('../assets/water.png');

const Container= ({
  children,
  style,
  ...props
}) => {

  return (
    <ImageBackground source={image} resizeMode="cover" style={[styles.imageContainer, style]} {...props}>
        {children}
    </ImageBackground>
  );
};

export default Container;

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 25
    },
  });
