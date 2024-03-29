/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import notifee from '@notifee/react-native';

const HomeScreen = () => {
  async function onDisplayNotification() {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      },
    });
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => onDisplayNotification()}
        title={'Notifee'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
