import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';

import LiveSessions from '../screen/liveSessions';
import GraphRepresent from '../screen/graphRepresent/graphRepresent';

import Signin from '../screen/signin';
import AssociateTrainer from '../screen/associateTrainer';
import DrawerScreen from '../screen/drawerScreens/drawerScreen';
import CreateTrainer from '../screen/createTrainer/createTrainer';
import EditTrainer from '../screen/editTrainer/editTrainer';

// CLIENTS SCREENS
import Clients from '../screen/clients';
import AddClient from '../screen/clientsScreen/addClient';
import EditClient from '../screen/clientsScreen/editClient';
// Cloud Database
import CloudDatabase from '../screen/cloudDatabase/cloudDatabase';

////Profile Screens
import Profile from '../screen/profile/profile';
import CreateHd from '../screen/profile/createHd';
import EditProfile from '../screen/profile/editProfile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerBar() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name="livesessions" component={LiveSessions} />
      <Drawer.Screen name="clouddatabase" component={CloudDatabase} />
      <Drawer.Screen name="associatetrainer" component={AssociateTrainer} />
      <Drawer.Screen name="createtrainer" component={CreateTrainer} />
      <Drawer.Screen name="edittrainer" component={EditTrainer} />
      <Drawer.Screen name="clients" component={Clients} />
      <Drawer.Screen name="addclient" component={AddClient} />
      <Drawer.Screen name="editclient" component={EditClient} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}

function MainNavi() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="drawerbar" component={DrawerBar} />
        <Stack.Screen name="createhd" component={CreateHd} />
        <Stack.Screen name="editprofile" component={EditProfile} />
        <Stack.Screen name="graphrepresent" component={GraphRepresent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavi;
