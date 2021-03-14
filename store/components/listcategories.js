import React from 'react'
import {View,Text,FlatList,Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default CategoriesList =(props)=>{
    console.log(props.list)
    return (
        <FlatList 

        style={{ padding: 5, }}
        data={props.list}

        showsHorizontalScrollIndicator={false}
        
        renderItem={({item,index})=>props.item==1 ? <Items1 direction={props.direction} index={index} items={item}/> : <Items2 direction={props.direction} index={index} items={item}/>}
    
        horizontal={true}

        keyExtractor={item=>item.id.toString()}
        
        />
    )
}


const Items1=(props)=>{
 return(
  props.index<4 ? 
  <Card style={{ padding: 10,height:170 }}>
  <Card.Cover style={{ width:150,height:100 }} source={{ uri: props.items.url }} />
  <Card.Title title={props.items.title} />
</Card>
:
<Text></Text>
 )
}

const Items2=(props)=>{
    return(
     props.index>3 ? 
     <Card style={{ padding: 10,height:170 }}>
     <Card.Cover style={{ width:150,height:100 }} source={{ uri: props.items.url }} />
     <Card.Title title={props.items.title} />
   </Card>
   :
   <Text></Text>
    )
   }