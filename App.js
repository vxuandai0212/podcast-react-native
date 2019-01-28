import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import {
    ListenScreen,
    ListenArticleScreen,
    ReadScreen,
    SpeakScreen,
    VocabScreen,
    WriteScreen
} from './screens'

export default class App extends React.Component {
    render() {
        return (
            <MainNavigator />
        );
    }
}

const ListenStack = createStackNavigator(
  {
    Listen: {
      screen: ListenScreen,
    },
    ListenArticle: {
      screen: ListenArticleScreen,
    },
  },
  {
    initialRouteName: 'Listen',
  }
);

const MainNavigator = createAppContainer(createBottomTabNavigator(
    {
        Vocabulary: { screen: VocabScreen },
        Listening: { screen: ListenStack },
        Speaking: { screen: SpeakScreen },
        Reading: { screen: ReadScreen },
        Writing: { screen: WriteScreen }
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Vocabulary') {
            iconName = `ios-rocket`
          } else if (routeName === 'Listening') {
            iconName = `ios-radio`
          } else if (routeName === 'Speaking') {
            iconName = `ios-mic`
          } else if (routeName === 'Reading') {
            iconName = `ios-book`
          } else if (routeName === 'Writing') {
            iconName = `ios-quote`
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  ));