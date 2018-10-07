import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

const childs = [{ name: 'jelena' }, { name: 'jovana' }];

class Header extends Component {
  state = {
    selected: 'jelena',
  };

  render() {
    const { selected } = this.state;
    return (
      <View>
        <Picker
          style={{ height: 50, width: 150 }}
          onValueChange={val => {
            if (this.props.onChangeChild) {
              this.props.onChangeChild();
            }
            this.setState(() => ({ selected: val }));
          }}
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
    );
  }
}

export default Header;
