import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ProgressBarAndroid,
  StyleSheet,
} from 'react-native';
import { Constants } from 'expo';

const mockData = [
  { title: '1Nove Gilje', collected: 40, goalAmount: 50 },
  { title: '2Vibratorrr', collected: 1, goalAmount: 5 },
  { title: 'S3Ony', collected: 4, goalAmount: 12 },
  { title: 'N4ove Gilje', collected: 40, goalAmount: 50 },
  { title: 'SO5ny', collected: 4, goalAmount: 12 },
  { title: 'Vib6ratorrr', collected: 1, goalAmount: 5 },
  { title: 'Nove7 Gilje', collected: 40, goalAmount: 50 },
  { title: 'Vibra8torrr', collected: 1, goalAmount: 5 },
  { title: 'SOn9y', collected: 4, goalAmount: 12 },
  { title: 'Nov3e0 Gilje', collected: 40, goalAmount: 50 },
  { title: 'SOn4y', collected: 4, goalAmount: 12 },
  { title: 'Vibr5atorrr', collected: 1, goalAmount: 5 },
];
const MARGIN_BOTTOM = 20;

export default class GoalsScreen extends Component {
  static navigationOptions = {
    headerStyle: { marginTop: Constants.statusBarHeight },
  };
  render() {
    return (
      <ScrollView style={{ paddingTop: 20, backgroundColor: '#fff' }}>
        {mockData.map(({ title, collected, goalAmount }) => (
          <View key={title} style={styles.goalItem}>
            <View style={styles.goalItemWrap}>
              <Text style={styles.goalItemTitle}>{title}</Text>
              <Text>
                {collected} / {goalAmount} &euro;
              </Text>
            </View>
            <ProgressBarAndroid
              progress={collected / goalAmount}
              styleAttr="Horizontal"
              indeterminate={false}
              color="#00ee00"
            />
          </View>
        ))}
        <View style={{ height: MARGIN_BOTTOM }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: MARGIN_BOTTOM,
  },
  goalItemTitle: {
    fontSize: 20,
  },
  goalItemWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
