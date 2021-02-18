import React from 'react'
import {View,Text} from 'react-native';
import Header from './header';


export default Login = ({navigation})=>{
    return (
       <Header screen="Login" component={Main} navigation={navigation} />
    )
}

const Main=()=>{
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}