import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';

const Account = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Button onPress={() => navigation.push('Auth')}>Login</Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
