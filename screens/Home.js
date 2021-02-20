import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,TouchableHighlight,Image,Button,ScrollView,FlatList ,SafeAreaView} from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import List from '../components/List';
import {useSelector,useDispatch} from "react-redux"
import {ProductAction as showproducts} from '../redux/actions/productAction';
import {categoriesAction as showcategories} from '../redux/actions/categoriesAction';
import Suggestions from '../components/suggestions';
import CategoriesList from '../components/listcategories';
import SecondProductList from '../components/secondProductList';


export default Home = ({navigation})=>{
    return (
        <Header screen="Home" component={Main} navigation={navigation} />
    )
}


// const Main=()=>{
//     return <FlatList
//     ListHeaderComponent={HeaderItem}
//        data={[]}
//        renderItem={()=>("")}
//     />
// }


const Main = ({navigation})=>{

    const dispatch = useDispatch();

    // collecting data from the store
    const data = useSelector(state=>state.productlist);
    const categories = useSelector(state=>state.categoreis);
    
   // passing data to the store
    useEffect(()=>{
        showproducts("data",dispatch);
        showcategories("categories",dispatch);
    },[]);


    return (
        <SafeAreaView style={{flex: 1}} >
        <ScrollView>
        <View style={styles.container}>
           <View style={styles.headerbar}>
               <Text style={styles.bartext}>
                   Shop by department
               </Text>
               <TouchableHighlight>
               <View style={styles.seemore}>
               <Text style={styles.bartext}>See More</Text>
                <Image style={{ opacity:.4 }} source={require('../assets/seemore.png')} />
               </View>
               </TouchableHighlight>
           </View>
           <View style={{ justifyContent:'flex-start',alignItems:"flex-start" }}>
           <CategoriesList item={1} list={categories}/>
           <CategoriesList item={2} list={categories}/>
           </View>
          

           <View style={styles.headerbar}>
               <Text style={styles.bartext}>
                   Shop by department
               </Text>
               <TouchableHighlight>
               <View style={styles.seemore}>
               <Text style={styles.bartext}>See More</Text>
                <Image style={{ opacity:.4 }} source={require('../assets/seemore.png')} />
               </View>
               </TouchableHighlight>
           </View>
           </View>

        <View style={{ justifyContent:'flex-start',alignItems:"flex-start" }}>
           <List navigation={navigation} list={data} direction="v" />
        </View>

        <View style={styles.headerbar}>
               <Text style={styles.bartext}>
                   Suggestions
               </Text>
               
        </View>

        <View style={{ padding:5 }}>
        <Suggestions/>
        </View>

        <View style={styles.headerbar}>
               <Text style={styles.bartext}>
                   You may also like
               </Text>
               <TouchableHighlight>
               <View style={styles.seemore}>
               <Text style={styles.bartext}>See More</Text>
                <Image style={{ opacity:.4 }} source={require('../assets/seemore.png')} />
               </View>
               </TouchableHighlight>
        </View>

        <View style={styles.secondproductliststyle}>
            <SecondProductList navigation={navigation} list={data} />
        </View>

        </ScrollView>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
     marginTop:10,
     padding: 10,
     fontFamily:"serif",
     flex:1
    },
    headerbar:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%"
    },
    seemore:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        color:"#807c78"
    },
    bartext:{
        color:"#807c78",
        marginLeft:10
    },
    secondproductliststyle:{
        padding:5,
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    }
});
