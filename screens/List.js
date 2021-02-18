import React from 'react'
import {View,Text,FlatList,Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default List =(props)=>{
    console.log(props.list)
    return (
        <FlatList 
        data={props.list}

        showsHorizontalScrollIndicator={false}
        
        renderItem={({item})=><Items direction={props.direction} items={item}/>}
    
        horizontal={props.direction==="h" ? true : false }

        keyExtractor={item=>item.id.toString()}
        
        />
    )
}


const Items=(props)=>{
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
 <View style={{ padding:10,display:'flex',flexDirection:'row',backgroundColor:"white",width:380,justifyContent:"flex-start" }}>
     <Image style={{ width:100,height:100, }} source={{ uri:props.items.url }} />
     <View style={{ marginLeft:30 }}>
         <Text style={{ fontSize:18,fontWeight:"bold" }}>{props.items.title}</Text>
         <View style={{ display:"flex",flexDirection:"row",padding: 5,justifyContent:'space-between',marginTop:5 }}>
         <Text>{props.items.price}</Text>
         <Text>{parseInt(props.items.price)+((30*parseInt(props.items.price))/100)}</Text>
         </View>
         <Text style={{ opacity:.5,marginTop:10 }}>ENDS in 00:00:00</Text>
     </View>
 </View>
 )
}