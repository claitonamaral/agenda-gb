import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/LocationScreen';
import ReservaScreen from './screens/ReservaScreen';
import ListaReservas from './screens/ListaReservas';
import LocationScreen from './screens/LocationScreen';
import LoginScreen from './screens/LoginScreen';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Reserva" component={ReservaScreen} />
      <Tab.Screen name="Lista" component={ListaReservas} />
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
