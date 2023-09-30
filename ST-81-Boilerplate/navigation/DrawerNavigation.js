import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "./TabNavigator";
import Profile from "./screens/Profile";

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return ( <Drawer.Navigator screenOptions={{headerShown:false}}>
         <Drawer.Screen name="Home" component={TabNavigator} />
          <Drawer.Screen name="Profile" component={Profile} /> 
          </Drawer.Navigator> );
           };
           export default DrawerNavigator;


  


