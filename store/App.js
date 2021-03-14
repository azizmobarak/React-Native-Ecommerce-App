/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
  View,
  Text
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './redux/store';


import Home from './screens/Home';
import Cart from './screens/Cart';
import CartDone from './screens/CartDone';
import Login from './screens/Login';
import Register from './screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Product from './screens/Product';
import {Avatar,Drawer} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const DrawerNav = createDrawerNavigator();


const App=() => {

const androidConfig = {
    clientId: '904194018028-uq55eb1gkjn11g6a130dsanr54c4hacv.apps.googleusercontent.com',
    appId: '1:904194018028:android:3751d4d65f2f9b223bb3c9',
    apiKey: '',
    databaseURL: 'https://secondstore-a692ceurope-west6.firebasedatabase.app',
    projectId: 'secondstore-a692c',
  
    // enable persistence by adding the below flag
    persistence: true,
  };

  var config = {
    apiKey: "AIzaSyC1_94_Cdo1JmDoeVHJ3NCJttCFHx53Hwo",
    authDomain: "secondstore-a692c.firebaseapp.com",
    databaseURL: "https://secondstore-a692c.europe-west6.firebasedatabase.app",
    storageBucket: "bucket.appspot.com"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }
  

  // Get a reference to the database service
  //var database = firebase.database();

 // Set an initializing state whilst Firebase connects
 const [initializing, setInitializing] = useState(true);
 const [user, setUser] = useState();

 // Handle user state changes
 function onAuthStateChanged(user) {
   setUser(user);
   if (initializing) setInitializing(false);
 }

 useEffect(() => {
   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
   return subscriber; // unsubscribe on unmount
 }, []);

if (initializing) return null;


if(!user){
  return(
    <Provider store={store}>
      <StatusBar barStyle="white" backgroundColor="red" />
      <NavigationContainer>
      <DrawerNav.Navigator InitialRoute="Login" drawerContent={(props)=><DrawerContent {...props}/>}>
          <DrawerNav.Screen name="Login" component={Login} />
          <DrawerNav.Screen name="Register" component={Register} />
        </DrawerNav.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

  return (
    <Provider store={store}>
      <StatusBar barStyle="white" backgroundColor="red" />
      <NavigationContainer>
      <DrawerNav.Navigator InitialRoute="Home" drawerContent={(props)=><DrawerContent {...props}/>}>
          <DrawerNav.Screen name="Home" component={Home} />
          <DrawerNav.Screen name="Login" component={Login} />
          <DrawerNav.Screen name="Register" component={Register} />
          <DrawerNav.Screen name="Cart" component={Cart} />
          <DrawerNav.Screen name="CartDone" component={CartDone} />
          <DrawerNav.Screen name="Product" component={Product} />
        </DrawerNav.Navigator>
      </NavigationContainer>
    </Provider>
  );
};



function DrawerContent(props){

return(
  <DrawerContentScrollView {...props}>
  <View style={{flex:1,alignItems:"center"}}>
    <Avatar.Image style={{backgroundColor:'white'}} size={130} source={require('./assets/avatar.png')}/>
  </View>
  <Drawer.Section>
  <DrawerItem 
         label="Home"
         icon={()=>(
          <Avatar.Icon backgroundColor="white" color="black" size={30} icon="home"/>
          )}
        onPress={()=>props.navigation.navigate('Home')}
    />
    <DrawerItem 
         label="Cart"
         icon={()=>(
          <Avatar.Icon backgroundColor="white" color="black" size={30} icon="cart"/>
          )}
        onPress={()=>props.navigation.navigate('Cart')}
    />
    <DrawerItem 
         label="Login"
         icon={()=>(
          <Avatar.Icon backgroundColor="white" color="black" size={30} icon="account"/>
          )}
        onPress={()=>props.navigation.navigate('Login')}
    />
  </Drawer.Section>
</DrawerContentScrollView>
  );
}

export default App;
