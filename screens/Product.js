import React from 'react'
import {View,Text} from 'react-native';
import Header from './header';

export default Product = ()=>{
    return (
        <Header screen="Products" component={Main} />
    )
}


const Main = ()=>{
    return (
        <View>
            <Text>Product</Text>
        </View>
    )
}
