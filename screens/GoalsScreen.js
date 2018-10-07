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
  { title: 'Sneakers', collected: 30, goalAmount: 50 },
  { title: 'Play Station 4 Pro', collected: 2, goalAmount: 500 },
  { title: 'FIFA 2019', collected: 4, goalAmount: 30 },
  { title: 'Harry Potter books', collected: 10, goalAmount: 25 },
  { title: 'Labrador cub', collected: 180, goalAmount: 200 },
  { title: 'Smart Watch', collected: 155, goalAmount: 370 },
  { title: 'Apple Macbook', collected: 375, goalAmount: 800 },
];
const MARGIN_BOTTOM = 20;

export default class GoalsScreen extends Component {
  static navigationOptions = {
    header: null,
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
              color="#497eab"
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
