import React, { Component } from 'react';
import { Constants } from 'expo';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class StatsScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };
  render() {
    return <View />;
  }
}

export default StatsScreen;
