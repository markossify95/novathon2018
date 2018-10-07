import React, { Component } from 'react';
import { Constants } from 'expo';
import { View } from 'react-native';
class StatsScreen extends Component {
  static navigationOptions = {
    headerStyle: { marginTop: Constants.statusBarHeight },
  };
  render() {
    return <View />;
  }
}

export default StatsScreen;
