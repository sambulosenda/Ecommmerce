import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Account from '../screens/Account';
import {Button} from 'react-native';

const Tab = createBottomTabNavigator();
const BottomHomeNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerRight: () => (
          <Button title="Cart" onPress={() => navigation.push('Cart')} />
        ),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomHomeNavigator;
