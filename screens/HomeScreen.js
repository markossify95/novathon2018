import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Button,
  BackHandler,
  Text,
} from 'react-native';

import { QrScanner } from '../components/QrScanner';
import Icon from 'expo/src/Icon';
import Layout from '../constants/Layout';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    scannerActive: false,
    titleText: 'Balance for this Week/Month: \n\t\t72.8 / 100',
  };

  _toggleScannerActive = () => {
    this.setState(previousState => {
      return { scannerActive: !previousState.scannerActive };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.scannerActive === true ? (
          <View style={{ position: 'relative' }}>
            
            <View style={{ position: 'absolute', top: 0, left: 0, width:Layout.window.width, height: Layout.window.height  }}>
              <QrScanner />
            </View>
            <Icon.Ionicons
              name="md-close"
              style={{ position: 'absolute', top: 0, left: 0 }}
              onPress={this._toggleScannerActive}
              size={40}
            />
          </View>
        ) : (
          <View>
            <Text>
              {'\n'}
              {'\n'}
              {'\n\t\t'}
              {this.state.titleText}
              {'\n'}
            </Text>
            <View style={styles.ScanButton}>
              <Button onPress={this._toggleScannerActive} title="Scan to pay" />
            </View>
          </View>
        )}
      </View>
    );
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    if (this.state.scannerActive) {
      this._toggleScannerActive();
    }
    return true;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ScanButton: {
    paddingTop: 50,
  },
});
