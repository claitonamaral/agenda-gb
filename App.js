// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ReservaScreen from './screens/ReservaScreen';
import ListaReservas from './screens/ListaReservas';
import LoginScreen from './screens/LoginScreen';
import LocationScreen from './screens/LocationScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Reserva') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
            } else if (route.name === 'Lista') {
              iconName = focused ? 'ios-list-sharp' : 'ios-list-outline';
            } else if (route.name === 'Location') {
              iconName = focused ? 'ios-location-sharp' : 'ios-location-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Reserva" component={ReservaScreen} />
        <Tab.Screen name="Lista" component={ListaReservas} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
