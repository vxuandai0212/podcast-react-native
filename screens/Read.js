import React from 'react';
import { Text, View } from 'react-native';

class ReadScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Read!</Text>
      </View>
    );
  }
}

export {
    ReadScreen
}