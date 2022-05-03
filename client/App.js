import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { MyTabs } from './navigation/MainContainer';
import * as RequestManager from './utils/RequestManager';

export default function App() {

  [initialized, setInit] = useState(false);

  //Runs hook one time upon app initialization
  useEffect(() => {
    RequestManager.getDeviceId()
      .then(deviceId => global.deviceId = deviceId)
      .then(() => console.log('Current DeviceID:' + global.deviceId))
      .then(setInit(true));
  }, []);
  return (initialized) ? <MyTabs /> : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

