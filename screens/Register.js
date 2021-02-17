import React from 'react'
import {View,Text} from 'react-native';


import Header from './header';

export default Register = ()=>{
    return (
        <Header screen="Register" component={Main} />
    )
}


const Main = ()=>{
    return (
        <View>
            <Text>Register</Text>
        </View>
    )
}
