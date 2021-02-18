import React from 'react'
import {View,Text} from 'react-native';


import Header from './header';

export default Register = ({navigation})=>{
    return (
        <Header screen="Register" component={Main} navigation={navigation} />
    )
}


const Main = ()=>{
    return (
        <View>
            <Text>Register</Text>
        </View>
    )
}
