import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GoalsScreen from '../screens/GoalsScreen';
import PaymentsScreen from '../screens/PaymentsScreen';
import BudgetScreen from '../screens/BudgetScreen';
import BudgetManagementScreen from '../screens/BudgetManagementScreen';
import StatsScreen from '../screens/StatsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-settings'
      }
    />
  ),
};

const GoalsStack = createStackNavigator({
  Goals: GoalsScreen,
});

GoalsStack.navigationOptions = {
  tabBarLabel: 'Goals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'ios-briefcase'
      }
    />
  ),
};

const PaymentStack = createStackNavigator({
  Payments: PaymentsScreen,
});

PaymentStack.navigationOptions = {
  tabBarLabel: 'Payments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-swap'
      }
    />
  ),
};

const BudgetStack = createStackNavigator({
  Budget: BudgetScreen,
});

BudgetStack.navigationOptions = {
  tabBarLabel: 'Budget',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'ios-briefcase'
      }
    />
  ),
};

const BudgetManagementStack = createStackNavigator({
  BudgetMgmt: BudgetManagementScreen,
});

BudgetManagementStack.navigationOptions = {
  tabBarLabel: 'Budget',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const TransactionStack = PaymentStack;
TransactionStack.navigationOptions.tabBarLabel = 'Transactions';

const StatsStack = createStackNavigator({
  Stats: StatsScreen,
});

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-stats'
      }
    />
  ),
};

const opts = {
  tintColor: '#8f9adc',
  activeTintColor: '#8f9adc',
};

export default createBottomTabNavigator(
  {
    // PARENT
    BudgetStack,
    TransactionStack,
    StatsStack,

    // SettingsStack,

    // CHILDREN
    HomeStack,
    PaymentStack,
    GoalsStack,
  },
  opts,
);
