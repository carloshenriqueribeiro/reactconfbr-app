//@flow
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Globals from '../Globals';

import type { Children } from 'react';

type Props = {
  children?: Children
}

class BackgroundImage extends Component<void, Props, void> {
  render() {
    return (
      <Image source={require('../../assets/images/dotted-layer.png')} style={styles.backgroundImage}>
        {this.props.children}
      </Image>
    )  
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: Globals.colors.primary_black,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});

export { BackgroundImage };