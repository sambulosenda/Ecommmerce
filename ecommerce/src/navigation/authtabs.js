import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const Auth = createMaterialTopTabNavigator();
const Authtabs = () => {
  return (
    <View>
      <Auth.Navigator>
        <Auth.Screen name="SignIn" component={Signin} />
        <Auth.Screen name="SignUp" component={Signup} />
      </Auth.Navigator>
    </View>
  );
};

export default Authtabs;

const styles = StyleSheet.create({});
