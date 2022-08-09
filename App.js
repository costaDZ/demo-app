/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Button, TextInput} from 'react-native';

import {PESDK, Configuration} from 'react-native-photoeditorsdk';

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
    // Set up configuration
    let configuration: Configuration = {
      // Configure sticker tool
      sticker: {
        // Enable personal stickers
        personalStickers: true,
        // Configure sticker library
        categories: [
          // Create sticker category with stickers
          {
            identifier: 'example_sticker_category_logos',
            name: 'Logos',
            thumbnailURI: require('./assets/React.png'),
            items: [
              {
                identifier: 'example_sticker_logos_react',
                name: 'React',
                stickerURI: require('./assets/React.png'),
              },
              {
                identifier: 'example_sticker_logos_imgly',
                name: 'IMG.LY',
                stickerURI: require('./assets/Igor.png'),
              },
            ],
          },
          // Use existing sticker category
          {identifier: 'imgly_sticker_category_emoticons'},
          // Modify existing sticker category
          {
            identifier: 'imgly_sticker_category_shapes',
            items: [
              {identifier: 'imgly_sticker_shapes_badge_01'},
              {identifier: 'imgly_sticker_shapes_arrow_02'},
              {identifier: 'imgly_sticker_shapes_spray_03'},
            ],
          },
        ],
      },
    };
    PESDK.openEditor(image, configuration).then(
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
        {/* <TextInput
          style={{backgroundColor: 'white', height: 40, width: 200}}
          placeholder="Enter text"
          onChangeText={text => {
            console.log(text);
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
