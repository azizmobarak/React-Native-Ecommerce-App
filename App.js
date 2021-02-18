/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/store';


import Home from './screens/Home';
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const App= () => {


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Drawer.Navigator InitialRoute="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
