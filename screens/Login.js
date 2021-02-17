import React from 'react'
import {View,Text} from 'react-native';
import Header from './header';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default Login = ()=>{
    return (
       <Header screen="Login" component={Main} />
    )
}

const Main=()=>{
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}