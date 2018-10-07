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
    budgetBalance: 78,
    transfer: 78,
  };

  onChange = () => {
    this.setState(() => ({ budgetBalance: 50, transfer: 65 }));
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
            <Button
              style={{ float: 'right' }}
              title="Edit"
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={{ flex: 1.5, padding: 30 }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 30,
              marginBottom: 20,
              color: Colors.fgColor,
            }}
          >
            Next Scheduled transfer
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: Colors.fgColor, fontSize: 20 }}>
              11 oct: 1000
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{ marginRight: 30, color: Colors.fgColor, fontSize: 20 }}
              >
                {transfer} &euro;
              </Text>
              <Button title="Edit" onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default BudgetScreen;
