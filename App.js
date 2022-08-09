/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Button, TextInput} from 'react-native';

import {PESDK} from 'react-native-photoeditorsdk';

/**
 * Uncomment the following single line of code to unlock PhotoEditor SDK automatically
 * for both platforms. Every platform requires a separate license file which must be
 * named `pesdk_license.ios.json` for the iOS license and `pesdk_license.android.json`
 * for the Android license file.
 */
// PESDK.unlockWithLicense(require('./pesdk_license'));

const App = () => {
  const openEditor = () => {
    // Set up sample image
    let image = require('./assets/LA.jpg');

    PESDK.openEditor(image).then(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      },
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View title="PhotoEditor SDK">
        <Button onPress={openEditor} title="opne Editor" />
        {/* 🔴🔴 When i use text input it crashes the app when i comment the text input it works 🔴🔴*/}
        <TextInput
          style={{backgroundColor: 'white', height: 40, width: 200}}
          placeholder="Enter text"
          onChangeText={text => {
            console.log(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
