import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import React from 'react';
import Home from '../components/Home'
import SendFeedback from '../components/SendFeedback';
import CreateFeedback from '../components/CreateFeedback';

const screens = {
  Home: {
    screen: Home,
  }, 
  CreateFeedback: {
    screen: CreateFeedback,
  }, 
  SendFeedback:{
    screen:SendFeedback,
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerBackTitle:'Back',
    title: 'Critique', 
    headerStyle : {
      backgroundColor: '#eee'
    },
  }
});

export default HomeStack;