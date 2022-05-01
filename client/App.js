import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { MyTabs } from './navigation/MainContainer';
import * as RequestManager from './utils/RequestManager';

export default function App() {
  //Runs hook one time upon app initialization
  useEffect(() => {
    RequestManager.getDeviceId()
      .then(deviceId => global.deviceId = deviceId)
      .then(() => {
        RequestManager.removeFromDislikedCards(1);
        RequestManager.removeFromMyCards(1);
        RequestManager.removeFromSavedCards(1);
      })
  }, []);
  return <MyTabs />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

