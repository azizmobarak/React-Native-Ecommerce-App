import React from 'react'
import {View,Text,FlatList,Image,TouchableHighlight} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {passProduct} from "../redux/actions/Passproduct";

export default SecondProductList =(props)=>{

    return (
       <View style={{ width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between" }}>
         {props.list.map((item,index)=>{
            return <Items key={item.id} navigation={props.navigation} items={item}/>
         })}  
       </View>
    )
}


const Items=(props)=>{


const dispatch = useDispatch();
const sendProduct=(item)=>{
      passProduct({
       id:item.id,
       url:item.url,
       title:item.title,
       price:item.price
      },
      dispatch);
    
      props.navigation.navigate('Product');
  
    }


 return(
   <Card onPress={()=>sendProduct(props.items)} style={{ padding: 12,height:190,width:"48%",marginLeft:2,marginBottom:8,padding: 2, }}>
   <Card.Cover style={{ width:"100%",height:100 }} source={{ uri: props.items.url }} />
     <View style={{ display:"flex",width:"100%",justifyContent:"center",alignItems:"center" }}>
         <Text style={{fontWeight:"normal", fontSize:20}}>{props.items.title.substring(0,20)}</Text>
         <Text style={{fontWeight:"bold", fontSize:26}} >{props.items.price}$</Text>
     </View>
   <View style={{paddin:4, position:"absolute" , width:"100%",display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center" }}>
     {
    parseInt(props.items.price)>20 && parseInt(props.items.price)<30 ?
        props.items.title==="poppy seed roll" ?
        <View style={{ backgroundColor:"red",marginTop:-8,marginLeft:5,width:45,height:27,display:"flex",justifyContent:"center",alignItems:"center" }}>
        <Text style={{ color:"white",fontWeight:"bold" ,fontSize:16  }}>New</Text>
     </View>
        :
        <View style={{ backgroundColor:"red",marginTop:-8,marginLeft:5,width:45,height:27,display:"flex",justifyContent:"center",alignItems:"center" }}>
        <Text style={{ color:"white" ,fontWeight:"bold",fontSize:16  }}>-30%</Text>
     </View>
     :
     <Text></Text>
     }
      <TouchableHighlight>
          <Icon style={{ color:"white",padding:3 }} name="sticker-outline" size={25} />
      </TouchableHighlight>
   </View>
 </Card>
 )
}