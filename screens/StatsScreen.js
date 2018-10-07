import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Layout from '../constants/Layout';
import PieChart from '../components/PieChart';

class StatsScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };

  state = {};

  data = {
    spendingsPerYear: [
      { year: 2016, value: 3.24 },
      { year: 2015, value: 3.24 },
      { year: 2014, value: 10.35 },
      { year: 2013, value: 10.84 },
      { year: 2012, value: 9.92 },
      { year: 2011, value: 65.8 },
      { year: 2010, value: 19.47 },
      { year: 2009, value: 30.24 },
      { year: 2008, value: 10.35 },
      { year: 2007, value: 10.84 },
      { year: 2006, value: 19.92 },
      { year: 2005, value: 80.8 },
      { year: 2004, value: 19.47 },
      { year: 2003, value: 34.24 },
      { year: 2001, value: 65.35 },
      { year: 2000, value: 45.84 },
      { year: 1999, value: 60.92 },
      { year: 1998, value: 21.8 },
      { year: 1997, value: 19.47 },
      { year: 1996, value: 3.24 },
      { year: 1995, value: 10.35 },
      { year: 1994, value: 20.84 },
      { year: 1993, value: 60.92 },
      { year: 1992, value: 80.8 },
    ],
    spendingsLastMonth: [
      { number: 8, name: 'Fun activities' },
      { number: 7, name: 'Dog' },
      { number: 16, name: 'Food' },
      { number: 23, name: 'Car' },
      { number: 42, name: 'Rent' },
      { number: 4, name: 'Misc' },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: this.data.spendingsPerYear,
    };
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
  }

  _onPieItemSelected(newIndex) {
    this.setState({
      ...this.state,
      activeIndex: newIndex,
      spendingsPerYear: this._shuffle(this.data.spendingsPerYear),
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
      <ScrollView>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
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
