import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../../screens/search';
import Event from '../../screens/event';
import Profile from '../../screens/profile';
import Component from '../../component'
import Favourite from '../../screens/favourite';


type Props = {}

const Tab = createBottomTabNavigator();

const tabBar = (props: any) => {
  return <Component.BottomTab {...props} />;
};
const BottomNavigation = (props: Props) => {
  return (
    <Tab.Navigator  
    screenOptions={{headerShown: false}}
    tabBar={props => tabBar(props)}
    initialRouteName='Event'>
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Event" component={Event} />
    <Tab.Screen name="Favourites" component={Favourite} />
    <Tab.Screen name="Profile" component={Profile} />
    
  </Tab.Navigator>
  )
}

export default BottomNavigation