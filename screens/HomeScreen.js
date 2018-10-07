import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  BackHandler,
  Text,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { Constants } from 'expo';

import { QrScanner } from '../components/QrScanner';
import Icon from 'expo/src/Icon';
import Layout from '../constants/Layout';

export default class HomeScreen extends React.Component {
  state = {
    scannerActive: false,
    isPaying: false,
    paid: false,
    data: null,
  };

  static navigationOptions = {
    header: null,
  };

  _toggleScannerActive = () => {
    this.setState(previousState => {
      return { scannerActive: !previousState.scannerActive };
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/photo_2018-10-07_09-33-42.jpg')}
        style={styles.container}
      >
        {this.state.isPaying === true ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : null}
        {this.state.scannerActive && !this.state.isPaying ? (
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
        ) : this.state.scannerActive && this.state.isPaying ? (
          <View>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              Balance for this Week/Month:
            </Text>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              72.8 / 100
            </Text>
          </View>
        ) : (
          <View>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              Balance for this Week/Month:
            </Text>
            <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
              72.8 / 100
            </Text>
            <View style={styles.ScanButton}>
              <Button onPress={this._toggleScannerActive} title="Scan to pay" />
            </View>
          </View>
        )}
      </ImageBackground>
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
    this.setState(() => {
      return {
        isPaying: false,
      };
    });

    alert(`Payment successful: \n ${this.state.data.data}`);
  };

  processPayment = x => {
    this.setState(() => {
      return {
        isPaying: true,
        data: x,
      };
    });
    setTimeout(
      this._stopPaying,
      Math.floor(Math.max(1500, Math.random() * 3500)),
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 150,
  },
  ScanButton: {
    alignSelf: 'center',
    width: 200,
  },
});
