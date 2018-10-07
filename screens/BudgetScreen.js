import React, { Component } from 'react';
import { View } from 'react-native';
import { Constants } from 'expo';

class BudgetScreen extends Component {
  static navigationOptions = {
    headerStyle: { marginTop: Constants.statusBarHeight },
  };
  render() {
    return <View />;
  }
}

export default BudgetScreen;
