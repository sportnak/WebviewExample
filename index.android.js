/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View
} from 'react-native';

export default class WebviewExample extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
      />
    );
  }
}
AppRegistry.registerComponent('WebviewExample', () => WebviewExample);
