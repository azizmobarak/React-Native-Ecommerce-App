import React from 'react'
import {View,Text,FlatList,Image,TouchableHighlight} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CountDown from 'react-native-countdown-component';
import {useDispatch} from 'react-redux';
import {passProduct} from "../redux/actions/Passproduct";

export default List =(props)=>{
   return( <View style={{ width:"100%",padding:10 }}>
     {
      props.list.map(item=><Items key={item.id} navigation={props.navigation} direction={props.direction} items={item}/>)
     }
   </View>)
}


const Items=(props)=>{

  const dispatch = useDispatch();

  const sendProduct=(item)=>{
    passProduct({
     id:item.id,
     url:item.url,
     title:item.title,
     price:item.price,
     color:item.color,
     size:item.size

    },
    dispatch);
  
    props.navigation.navigate('Product');

  }

 return(
   props.direction==="h" ?
   <Card style={{ padding: 10,height:200 }}>
   <Card.Cover style={{ width:150,height:100 }} source={{ uri: props.items.url }} />
   <Card.Title title={props.items.title} />
   <Card.Content>
     <Text>{props.items.price} $</Text>
   </Card.Content>
 </Card>
 :
 <TouchableHighlight onPress={()=>sendProduct(props.items)}>
 <View style={{ padding:10,display:'flex',flexDirection:'row',backgroundColor:"white",width:"100%",justifyContent:"flex-start" }}>
     <View>
     <Image style={{ width:130,height:100,borderRadius:10 }} source={{ uri:props.items.url }} />
     <View style={{ position:"absolute",backgroundColor:"red",width:50,height:30,marginTop:10,borderTopRightRadius:8,borderBottomRightRadius:8,display:"flex",justifyContent:"center",alignItems:"center" }}>
       <Text style={{ color:"white" }}>-30%</Text>
     </View>
     </View>
     <View style={{ marginLeft:20 }}>
         <Text style={{ fontSize:18,fontWeight:"bold" }}>{props.items.title}</Text>
         <View style={{ display:"flex",flexDirection:"row",padding: 5,justifyContent:"space-around",marginTop:5 }}>
         <Text style={{ fontSize:20,color:"red" }}>{props.items.price}$</Text>
         <Text style={{ textDecorationLine: 'line-through' }}>{parseInt(props.items.price)+((30*parseInt(props.items.price))/100)} $</Text>
         </View>
         
         <View style={{ marginTop:5, display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:120 }}>
         <Text style={{ opacity:.3,marginTop:0 }}>Ends in </Text>
         <CountDown
           size={8}
           until={1000*60*60*parseInt(Math.random()*40)}
           onFinish={() => alert('Finished')}
           digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
          digitTxtStyle={{color: '#1CC625'}}
          timeLabelStyle={{color: 'black', fontWeight: 'bold'}}
          separatorStyle={{color: '#1CC625'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
      />
         </View>
     </View>
 </View>
 </TouchableHighlight>
 )
}