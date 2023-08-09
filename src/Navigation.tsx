import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import Login from './views/Login';
import Home from './views/Home';
import VirtualTask from './views/VirtualTask';
import Sucursales from './views/Sucursales';
import Tasks from './views/Tasks';
import Ticket from './views/Ticket';

function Navigation(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VirtualTask"
          component={VirtualTask}
          options={{
            animation: 'fade_from_bottom',
            title: 'Turno virtual',
            headerStyle: {backgroundColor: '#3DAE2B'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Sucursales"
          component={Sucursales}
          options={{
            title: 'Crear turno virtual',
            headerStyle: {backgroundColor: '#3DAE2B'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{
            title: 'Trámites',
            headerStyle: {backgroundColor: '#3DAE2B'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Ticket"
          component={Ticket}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
