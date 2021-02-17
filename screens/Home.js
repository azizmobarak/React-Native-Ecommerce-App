import React from 'react'
import {View,Text} from 'react-native';
import Header from './header';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default Home = ()=>{
    return (
        <Header screen="Home" component={Main} />
    )
}

const Main = ()=>{
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
