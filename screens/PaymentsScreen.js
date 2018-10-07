import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const categories = [
  { text: 'all' },
  { text: 'pornici' },
  { text: 'droga' },
  { text: 'spavanje' },
  { text: 'shopping' },
  { text: 'hackathon' },
];

const mockData = [
  { date: '12-08-2018 20:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-08-2018 21:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-08-2018 22:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-08-2018 20:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-10-2018 21:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-11-2018 22:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-02-2018 20:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-04-2018 21:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-05-2018 22:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-06-2018 20:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-07-2018 21:31', itemBought: 'Kondomi', amount: 20 },
  { date: '12-01-2018 22:31', itemBought: 'Kondomi', amount: 20 },
];

const MARGIN_BOTTOM = 20;

class PaymentsScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff', paddingTop: 10 }}>
        <ScrollView horizontal style={{ marginLeft: 20 }}>
          {categories.map(({ text }, i) => (
            <View
              style={{
                padding: 10,
                backgroundColor: i === 0 ? '#777' : '#eee',
                borderRadius: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              key={text}
            >
              <Text>{text}</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView style={{ paddingTop: 20 }}>
          {mockData.map(({ date, itemBought, amount }) => (
            <View style={styles.paymentItem} key={date}>
              <Text>{itemBought}</Text>
              <Text>
                {date} - {amount} &euro;
              </Text>
            </View>
          ))}
          <View style={{ height: MARGIN_BOTTOM }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: MARGIN_BOTTOM,
  },
});

export default PaymentsScreen;
