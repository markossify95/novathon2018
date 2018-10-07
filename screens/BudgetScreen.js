import React, { Component } from 'react';
import { View, Text, Button, Picker } from 'react-native';
import { Constants } from 'expo';
import Colors from '../constants/Colors';
const childs = [{ name: 'Jelena' }, { name: 'Dejan' }];

class BudgetScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    budgetBalance: 102,
    transfer: 150,
  };

  onChange = () => {
    this.setState(() => ({ budgetBalance: 77, transfer: 150, selected: val }));
  };

  render() {
    const { budgetBalance, transfer, selected } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: Colors.bgColor }}>
        <View
          style={{
            marginLeft: 20,
          }}
        >
          <Picker
            style={{ height: 50, width: 150 }}
            onValueChange={this.onChange}
            selectedValue={selected}
          >
            {childs.map(child => (
              <Picker.Item
                label={child.name}
                key={child.name}
                value={child.name}
              />
            ))}
          </Picker>
        </View>
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
