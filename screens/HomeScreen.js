import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  BackHandler,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Constants } from 'expo';

import { QrScanner } from '../components/QrScanner';
import Icon from 'expo/src/Icon';
import Layout from '../constants/Layout';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { marginTop: Constants.statusBarHeight },
  };

  state = {
    scannerActive: false,
    titleText: 'Balance for this Week/Month: \n\t\t72.8 / 100',
    isPaying: false,
    data: null
  };

  _toggleScannerActive = () => {
    this.setState(previousState => {
      return { scannerActive: !previousState.scannerActive };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isPaying === true ?
          (<ActivityIndicator size="large" color="#0000ff" />) : null
        }
        {this.state.scannerActive === true ? (
          <View style={{ position: 'relative' }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: Layout.window.width,
                height: Layout.window.height,
              }}
            >
              <QrScanner
                cancelMethod={this.handleBackPress}
                processPaymentMethod={this.processPayment}
              />
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
      return true;
    } else {
      BackHandler.exitApp();
    }
  };

  _stopPaying = () => {
    this.setState(
      () => {
        return {
          isPaying: false
        };
      }
    );

    alert(`Payment successful: \n ${this.state.data.data}`);
  }

  processPayment = (x) => {
    this.setState(
      () => {
        return {
          isPaying: true,
          data: x
        };
      }
    );
    setTimeout(this._stopPaying, Math.floor(Math.max(1500, Math.random() * 3500)));
  }
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
