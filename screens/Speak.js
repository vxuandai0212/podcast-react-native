import React from 'react';
import { Text, View } from 'react-native';

class SpeakScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Speak!</Text>
      </View>
    );
  }
}

export {
    SpeakScreen
}