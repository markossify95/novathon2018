import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Header from '../components/Header';
import { Constants } from 'expo';
import Colors from '../constants/Colors';

const categories = [
  { text: 'all', id: 0 },
  { text: 'clothes', id: 1 },
  { text: 'groceries', id: 2 },
  { text: 'entertainment', id: 3 },
  { text: 'services', id: 4 },
  { text: 'books', id: 5 },
];

const mockData = [
  {
    date: '12-08-2018 20:31',
    itemBought: 'Office Shoes',
    amount: 55.6,
    category: 1,
  },
  {
    date: '12-08-2018 21:31',
    itemBought: 'Supermarket',
    amount: 5,
    category: 2,
  },
  {
    date: '12-08-2018 22:31',
    itemBought: 'Cinema Bratislava',
    amount: 5.5,
    category: 3,
  },
  {
    date: '13-08-2018 20:31',
    itemBought: 'Quick Delivvery LTD',
    amount: 2.5,
    category: 4,
  },
  {
    date: '13-10-2018 21:31',
    itemBought: 'Amazon Books',
    amount: 7.99,
    category: 5,
  },
  {
    date: '12-11-2018 22:31',
    itemBought: 'Sweather Shop',
    amount: 12.99,
    category: 1,
  },
  {
    date: '12-02-2018 20:31',
    itemBought: 'Cinema Bratislava',
    amount: 5.5,
    category: 3,
  },
  {
    date: '12-04-2018 21:31',
    itemBought: 'McDonalds',
    amount: 3.97,
    category: 4,
  },
  {
    date: '12-05-2018 22:31',
    itemBought: 'Amazon Books',
    amount: 4.99,
    category: 5,
  },
  {
    date: '12-06-2018 20:31',
    itemBought: 'Supermarket',
    amount: 1.26,
    category: 2,
  },
  {
    date: '12-07-2018 21:31',
    itemBought: 'Supermarket',
    amount: 15.2,
    category: 2,
  },
  {
    date: '12-01-2018 22:31',
    itemBought: 'Supermarket',
    amount: 2.13,
    category: 2,
  },
];

mockData.sort((a, b) => a.date < b.date);
const MARGIN_BOTTOM = 20;

class PaymentsScreen extends Component {
  state = {
    selectedCategory: 0,
  };

  static navigationOptions = {
    headerTitle: <Header />,
  };

  render() {
    const { selectedCategory } = this.state;
    const cats = mockData.filter(
      cat => selectedCategory === 0 || cat.category === selectedCategory,
    );
    return (
      <View style={{ backgroundColor: Colors.bgColor }}>
        <ScrollView
          horizontal
          style={{
            marginLeft: 20,
            padding: 10,
            height: 70,
            minHeight: 70,
            maxHeight: 70,
          }}
        >
          {categories.map(({ text, id }) => (
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor:
                  selectedCategory === id ? '#2745dc' : '#2f95dc',
                borderRadius: 20,
                marginRight: 10,
                marginTop: 7,
                // minWidth: 50,
              }}
              onPress={() => this.setState(() => ({ selectedCategory: id }))}
              key={id}
            >
              <Text style={{ color: '#fff' }}>{text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView style={{ paddingTop: 15, paddingBottom: 15 }}>
          {cats.map(({ date, itemBought, amount }) => (
            <View style={styles.paymentItem} key={date}>
              <Text style={{}}>{itemBought}</Text>
              <Text style={{}}>
                {date} -{' '}
                <Text style={{ fontWeight: '600', color: '#f55' }}>
                  {amount} &euro;
                </Text>
              </Text>
            </View>
          ))}
          <View style={{ minHeight: MARGIN_BOTTOM, flex: 1 }} />
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
    padding: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    marginBottom: MARGIN_BOTTOM,
  },
});

export default PaymentsScreen;
