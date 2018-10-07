import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Constants } from 'expo';
import Header from '../components/Header';
import Colors from '../constants/Colors';

class BudgetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} },
    } = navigation;
    return params;
  };

  componentDidMount() {
    this.props.navigation.setParams({
      headerTitle: <Header onChangeChild={() => this.onChange()} />,
    });
    console.log(this.props.navigation.state.params);
  }

  state = {
    budgetBalance: 102,
    transfer: 150,
  };

  onChange = () => {
    this.setState(() => ({ budgetBalance: 77, transfer: 150 }));
  };

  render() {
    const { budgetBalance, transfer } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
        <View style={{ flex: 1, padding: 30 }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 30,
              marginBottom: 20,
              color: Colors.fgColor,
              textAlign: 'center',
            }}
          >
            Budget Balance
          </Text>
          <View style={{}}>
            <Text
              style={{
                color: Colors.fgColor,
                fontSize: 50,
                textAlign: 'center',
              }}
            >
              {budgetBalance} &euro;
            </Text>
            <View style={{ width: 100, alignSelf: 'center' }}>
              <Button title="Update" onPress={() => {}} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1.5, padding: 30 }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 30,
              marginBottom: 20,
              color: Colors.fgColor,
              textAlign: 'center',
            }}
          >
            Next Scheduled transfer
          </Text>
          <View style={{}}>
            <Text
              style={{
                color: Colors.fgColor,
                fontSize: 28,
                textAlign: 'center',
              }}
            >
              12 Dec
            </Text>
            <Text
              style={{
                color: Colors.fgColor,
                fontSize: 50,
                textAlign: 'center',
              }}
            >
              {transfer} &euro;
            </Text>
            <View style={{ width: 100, alignSelf: 'center' }}>
              <Button title="Update" onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BudgetScreen;
