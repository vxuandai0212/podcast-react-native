import React from 'react';
import { Text, View } from 'react-native';

class VocabScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vocab!</Text>
      </View>
    );
  }
}

export {
    VocabScreen
}