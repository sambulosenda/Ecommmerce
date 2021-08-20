/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../components/Button';

const Explore = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
