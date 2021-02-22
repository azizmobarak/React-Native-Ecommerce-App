import {AsyncStorage} from '@react-native-community/async-storage'; 
import React, { useContext, useEffect, useState } from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {Text,View,StyleSheet,TouchableOpacity,TextInput,
    TouchableWithoutFeedback,Image,TouchableHighlight,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import Product from '../screens/Product';
import {useSelector} from 'react-redux'
import {AuthContext} from '../auth/index';
import auth from '@react-native-firebase/auth';



export default Header = (props)=>{



 // const [user,setUser] = useContext(AuthContext);
//  const [initializing,setInitializing]=useState(true);

// const onAuthStateChanged=(user)=>{
// setUser(user);
// if(initializing) setInitializing(false);
// }


// useEffect(()=>{
// const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
// return subscriber;
// },[]);



// if(initializing) return null;
    
    return (
     props.screen==="Home" ?
       <HomeHeader cartLength={5} headerprops={props}/>
    :
      <AllpagesHeader page={props}/>
    )
}


const HomeHeader=(props)=>{

const cartcount = useSelector(state=>state.CartCount);

    return (
        <Stack.Navigator
        headerMode="screen"
        screenOptions={
            {
               header:()=>{
                   return(
                    <View style={styles.header}>
                    <View style={styles.menu}>
            
                    <TouchableOpacity onPress={()=>props.headerprops.navigation.openDrawer()} style={styles.menubtn}>
                         <Icon style={styles.menu} color="#8e9991" size={30} name="menu" />
                     </TouchableOpacity>
            
                    </View>
                    <View style={styles.search}>
                    <View style={styles.searchview}>
            
                    <Searchbar
                      placeholder="what are you looking for?"
                     onChangeText={()=>console.log('here')}
                     value=""
                     style={styles.searchbar}
                    //  icon={()=><Icon size={40} name="search" />}
                          />
            
                    </View>
                    </View>
                    <View style={styles.cartview}>
                    <TouchableHighlight>
                    <Icon style={styles.cart} color="#8e9991" size={30} name="shopping-outline" />
                    </TouchableHighlight>
                    <Text style={ styles.txtcart }>{cartcount}</Text>
                    </View>
                </View>
                   )
               }
           
            }
        }
        initialRouteName="Home"
       >
       <Stack.Screen
         name={props.headerprops.screen}
         component={props.headerprops.component}
         options={{ title:()=><View></View> } }
       />
     </Stack.Navigator>
    )
}



const AllpagesHeader=(props)=>{
    return(
        <Stack.Navigator
    headerMode="screen"
    screenOptions={
        {
            headerTintColor:"black",
           headerLeft:()=>{
               return  (
               <View style={styles.cartheader}>
               <TouchableWithoutFeedback style={{ backgroundColor:"white" }} onPress={()=>props.page.navigation.goBack()} >
               <Image style={{ width:30,marginLeft:10, }} source={require('../assets/back2.png')} />
                </TouchableWithoutFeedback>
               </View>
               )
           },
           headerRight:()=>{
               return(
                <View style={{ width: (Dimensions.get('window').width/2)+30 }}>
                    <Text style={styles.carttitle}>{props.page.screen==="Cart" ? "MyCart" : props.page.screen }</Text>
                </View>
               )
           }
        }
    }
   >
   <Stack.Screen
     name={props.page.screen}
     component={props.page.component}
     options={{ title:null} }
   />
 </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    header : {
        // flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:50,
        width:"100%"
    },
    menu:{
    marginTop:4,
    padding:0.5,
    },
    search:{
      height:45,
      width:"80%",
      padding: 10,
    },
    cart:{
     marginTop:0,
     marginRight:3
    },
    searchbar:{
     width:"100%",
     flex:1,
     padding:1,
     height:45,
     fontSize:18,
     backgroundColor:"#f0e9e9",
    },
    searchview:{
        width:"100%",
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        elevation:1,
        shadowColor:"white",
        shadowOpacity:.4,
    },
    txtcart:{
        display:"flex",
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"35%",
        marginTop:5,
        color:"red",
        height:15,
        fontWeight:"bold"
    },
    cartview:{
        marginTop:1,
        height:40,
        justifyContent:"center"
    },
    cartheader:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"62%",
        padding: 10,
    
    },
    carttitle:{
        fontSize:23,
        fontWeight:"bold",
        fontFamily:'serif',
    }
})