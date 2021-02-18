import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,TouchableHighlight,Image,Button,ScrollView} from 'react-native';
import Header from './header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import List from './List';
import {useSelector,useDispatch} from "react-redux"
import {ProductAction as addproduct} from '../redux/actions/productAction';
import Suggestions from '../components/suggestions';

export default Home = ({navigation})=>{
    return (
        <Header screen="Home" component={Main} navigation={navigation} />
    )
}



const Main = ()=>{

    const dispatch = useDispatch();
    const data = useSelector(state=>state.productlist);
    
 
    const [productlist,setList]=useState([]);

    useEffect(()=>{
        addproduct("data",dispatch);
    },[]);


    return (
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
           <List list={data} direction="h" />
           <List list={data} direction="h" />
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

           <View style={{ justifyContent:'flex-start',alignItems:"flex-start" }}>
           <List list={data} direction="v" />
           </View>
        </View>

        <View style={styles.headerbar}>
               <Text style={styles.bartext}>
                   Suggestions
               </Text>
        </View>
        <View>
        <Suggestions/>
        </View>
        </ScrollView>
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
    }
});
