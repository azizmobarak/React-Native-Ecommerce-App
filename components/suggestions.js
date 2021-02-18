import React,{useEffect} from 'react';
import {FlatList,Text,View,StyleSheet} from 'react-native';
import {useSelector,useDispatch} from "react-redux"
import {Suggestion as showSuggetion} from '../redux/actions/suggestionActions';


export default function Suggestions() {

const data = useSelector(state=>state.suggestion);
const dispatch = useDispatch();

useEffect(()=>{
    showSuggetion('suggest',dispatch);
},[])

    return (
      <View>
           <FlatList
       data={data}
       showsHorizontalScrollIndicator={false}
       horizontal={true}
       renderItem={({item})=><View style={styles.suggest}><Text style={{ padding:2 }}>{item.name}</Text></View>}
       keyExtractor={(item)=>item.name}
       />
      </View>
    )
}


const styles = StyleSheet.create({
    suggest:{
        padding: 10,
        borderColor:"black",
        borderWidth:0.2,
        borderRadius:30,
        marginTop:10,
        backgroundColor:"white",
        marginBottom:10,
        marginLeft:3
    }
})