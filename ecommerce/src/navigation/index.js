import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomHomeNavigator from './bottomHomeNavigator.nav';
import Explore from '../screens/Explore';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Authtabs from './authtabs';

const Stack = createStackNavigator();

const Router = ({navigation}) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        options={{headerShown: false}}
        component={BottomHomeNavigator}
        name="Home"
      />
      <Stack.Screen component={Explore} name="Explore" />
      <Stack.Screen component={ProductDetails} name="Details" />
      <Stack.Screen component={Cart} name="Cart" />
      <Stack.Screen component={Authtabs} name="Auth" />
    </Stack.Navigator>
  );
};

export default Router;
