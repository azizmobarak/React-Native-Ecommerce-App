import React from 'react'
import {View,Text} from 'react-native';


import Header from './header';

export default Cart = ()=>{
    return (
        <Header screen="Cart" component={Main} />
    )
}

const Main = ()=>{
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}
