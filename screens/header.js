import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default Header = (props)=>{
    
    return (
        <Stack.Navigator
         headerMode="screen"
         screenOptions={
             {
                 header:()=><CustomHomeHeader/>
             }
         }
        >
        <Stack.Screen
          name={props.screen}
          component={props.component}
          options={{ title: props.screen }}
        />
      </Stack.Navigator>
       
    )
}




const CustomHomeHeader=()=>{
    return(
        <View style={styles.header}>
            <View style={styles.menu}>
             <TouchableOpacity style={styles.menubtn}>
                 <Icon color="blue" size={50} icon="menu" />
             </TouchableOpacity>
            </View>
            <View style={styles.search}>
             
            </View>
            <View style={styles.cart}>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header : {
        height:50,
        backgroundColor:"transparent",
        padding:3
    },
    menu:{

    },
    search:{

    },
    cart:{

    },
    menubtn:{

    }
})