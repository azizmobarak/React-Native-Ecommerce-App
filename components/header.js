import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {Text,View,StyleSheet,TouchableOpacity,TextInput,TouchableWithoutFeedback,Image,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import Product from '../screens/Product';



export default Header = (props)=>{
    
    return (
       props.screen==="Home" ?
       <Stack.Navigator
       headerMode="screen"
       screenOptions={
           {
              header:()=><CustomHomeHeader header={props}/>
          
           }
       }
       initialRouteName="Home"
      >
      <Stack.Screen
        name={props.screen}
        component={props.component}
        options={{ title:()=><View></View> } }
      />
    </Stack.Navigator>
    :
    <Stack.Navigator
    headerMode="screen"
    screenOptions={
        {
            headerTintColor:"black",
           headerLeft:()=>{
               return <TouchableWithoutFeedback style={{ backgroundColor:"white" }} onPress={()=>props.navigation.goBack()} >
                    <Image style={{ width:30,marginLeft:10, }} source={require('../assets/back2.png')} />
                  </TouchableWithoutFeedback>
           },
           headerRight:()=>{
            return(
            <View style={styles.cartview}>
            <TouchableHighlight>
            <Icon style={styles.cart} color="#8e9991" size={30} name="shopping-outline" />
            </TouchableHighlight>
            <Text style={ styles.txtcart }>0</Text>
            </View>
            )
           }
        }
    }
   >
   <Stack.Screen
     name={props.screen}
     component={props.component}
     options={{ title:props.screen} }
   />
 </Stack.Navigator>
       
    )
}




const CustomHomeHeader=(props)=>{
    return(
        <View style={styles.header}>
        <View style={styles.menu}>

        <TouchableOpacity onPress={()=>props.header.navigation.openDrawer()} style={styles.menubtn}>
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
        <Text style={ styles.txtcart }>0</Text>
        </View>
    </View>
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
     marginRight:4
    },
    searchbar:{
     width:"100%",
     flex:1,
     padding:1,
     height:45,
     fontSize:18,
     backgroundColor:"#e0ded2",
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
        marginLeft:10,
    },
    cartview:{
        marginTop:1,
        height:40,
        justifyContent:"center"
    }
})