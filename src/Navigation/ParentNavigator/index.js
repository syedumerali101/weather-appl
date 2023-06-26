import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import NavigationOptions from '../NavigationOptions';

const ParentStack = createStackNavigator();

const ParentNavigator = () => {
  return (
    <ParentStack.Navigator screenOptions={NavigationOptions}>
      <ParentStack.Screen name="HomeScreen" component={HomeScreen} />
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
