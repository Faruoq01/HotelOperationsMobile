import React from 'react';
import {View, Text} from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() => {
          navigation.navigate('Admin');
        }}>
        Settings!
      </Text>
    </View>
  );
};

export default SettingsScreen;
