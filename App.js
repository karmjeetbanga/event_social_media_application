import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './Screens/LandingScreen';
import CreateScreen from './Screens/CreateScreen';
import EventScreen from './Screens/EventScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown:false}} name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen options={{headerBackTitleVisible:false}} name="Create Event" component={CreateScreen}/>
        <Stack.Screen  options={{ headerBackTitleVisible:false}} name="Event" component={EventScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

