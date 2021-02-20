import React from 'react'
import {View,Text} from 'react-native';


import Header from '../components/header';

export default Cart = ({navigation})=>{
    return (
        <Header screen="Cart" component={Main} navigation={navigation} />
    )
}

const Main = ()=>{
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}
