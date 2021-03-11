import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as firebase from 'firebase'; 


//Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhKG1wF8ilm_znsT4bQ9XaJOZkGOGdEa8",
    authDomain: "utenti-f9726.firebaseapp.com",
    databaseURL: "https://utenti-f9726.firebaseio.com",
    projectId: "utenti-f9726",
    storageBucket: "utenti-f9726.appspot.com",
    messagingSenderId: "6841064104",
    appId: "1:6841064104:web:63ffa82f04c367b426809d"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }




// You can import from local files
import AssetExample from './components/AssetExample';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import LoginForm from './screens/LoginForm';
import { Button } from 'react-native-paper';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App () {
 
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="LoginForm"   options={{ headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'monospace',
            color: 'white'
          },
        }}  component= {LoginForm}  />  
        <Stack.Screen name ="HomeScreen" options={{ headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'monospace',
            color: 'white'
          },
        }}  component= {HomeScreen}     />
         
        <Stack.Screen name ="Prova"     options={{
          title: 'MyWathclist',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'monospace',
            color: 'white'
          },
        }}   component= {DetailScreen}/>
        
      </Stack.Navigator>

    </NavigationContainer>
  )}
