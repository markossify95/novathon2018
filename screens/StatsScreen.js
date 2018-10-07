import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Layout from '../constants/Layout';
import PieChart from '../components/PieChart';
import Colors from '../constants/Colors';

class StatsScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };

  state = {};

  data = {
    spendingsLastMonth: [
      { number: 8, name: 'clothes' },
      { number: 7, name: 'entertainment' },
      { number: 16, name: 'groceries' },
      { number: 23, name: 'services' },
      { number: 42, name: 'books' },
      { number: 4, name: 'other' },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({
      ...this.state,
      activeIndex: newIndex,
    });
  }

  _shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  render() {
    const height = 500;
    const width = Layout.window.width;

    return (
      // <ScrollView>
      <View style={styles.container}>
        <Text style={styles.chart_title}>
          Distribution of spending this month
        </Text>
        <PieChart
          pieWidth={150}
          pieHeight={150}
          onItemSelected={this._onPieItemSelected}
          colors={[
            '#1f77b4',
            '#ff7f0e',
            '#2ca02c',
            '#d62728',
            '#9467bd',
            '#8c564b',
            '#e377c2',
            '#7f7f7f',
            '#bcbd22',
            '#17becf',
          ]}
          width={width}
          height={height}
          data={this.data.spendingsLastMonth}
        />
        {/* <Text style={styles.chart_title}>Spending per year in {this.data.spendingsLastMonth[this.state.activeIndex].name}</Text> */}
      </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    padding: 36,
  },
  chart_title: {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor: 'white',
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default StatsScreen;
