import React,{useEffect} from 'react'
import {View,Text,StyleSheet, SafeAreaView,ScrollView,Image,Button} from 'react-native';
import Header from '../components/header';
import {useSelector} from 'react-redux';
import { Rating,AirbnbRating } from 'react-native-ratings';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDispatch} from "react-redux";
import {addToCart} from '../redux/actions/CartAction';

export default Product = ({navigation})=>{
    return (
        <Header screen="Products" component={Main} navigation={navigation} />
    )
}


const Main = ()=>{

 const details = useSelector(state=>state.details);
 const dispatch = useDispatch();


const addproduct=()=>{
var product={
    id : details.id,
    title : details.title,
    price:details.price
}

addToCart(product,dispatch);

} 

useEffect(() => {
    console.log(details)
}, [])

    return (
        <SafeAreaView>
            <ScrollView>
           <View style={styles.container}>
            <View style={styles.top}>
            <Image style={{ width:"100%",height:300 }} source={{ uri:details.url }} />
            </View>
            <View style={styles.down}>
              <View style={styles.downHeader}>
              <Text style={styles.title} >{details.title}</Text>
              <Text style={styles.price}>{details.price}$</Text>
              </View>
              <View style={styles.ratingbar}>
                  <Text style={styles.brand}>brand</Text>
                  <View style={{ width:"50%" }}>
                  <AirbnbRating
                  count={5}
                  reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
                  defaultRating={4}
                  size={22}
                  showRating={false}
                  />
                  </View>
              </View>


              <View style={styles.avatars}>
                     <Avatar.Image style={styles.avataicon} source={require('../assets/avatar1.jpg')} />
                     <Avatar.Image style={styles.avataicon} source={require('../assets/avatar2.jpg')} />
                     <Avatar.Image style={styles.avataicon} source={require('../assets/avatar3.png')} />
                     <Avatar.Image style={styles.avataicon} source={require('../assets/avatar4.jpg')} />
                  </View>

                 <View style={{ padding:10 }}>
                 <Text style={styles.description}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
              pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
             Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
             in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
             vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
              Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
             faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
             Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
             Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
              non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
                  </Text>
                 </View>

            <View>

               <View style={styles.bottomContainer}>
               <View style={styles.bottomproduct}>
                   <Text style={styles.txtbottomproduct}>
                       Product specification
                   </Text>
                   <Image width={50} source={require('../assets/seemore.png')} />
               </View>

               <View style={styles.bottomproduct}>
                   <Text style={styles.txtbottomproduct}>
                       Customer Questions
                   </Text>
                   <AirbnbRating
                     count={5}
                     reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
                     defaultRating={4}
                     size={22}
                     showRating={false}
                  />
                   <Image width={50} source={require('../assets/seemore.png')} />
               </View>

               <View style={styles.bottomproduct}>
                   <Text style={styles.txtbottomproduct}>
                      Customer Reviews
                   </Text>
                   <Image width={50} source={require('../assets/seemore.png')} />
               </View>
               </View>
            </View>

             <View style={styles.addtocartSave}>
              <Icon name="sticker-outline" size={35} />

               <TouchableOpacity onPress={()=>addproduct()}  style={styles.addtocart}>
                    <Text style={styles.txtaddtocart}>Add to Cart</Text>
               </TouchableOpacity>
             </View>
            </View>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flex:0.5,
    },
    down:{
        flex:0.6,
    },
    title:{
        padding:8,
        fontSize:26,
        fontFamily:"serif",
        fontWeight:"bold"
    },
    downHeader:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
        padding: 4,
    },
    price:{
        fontSize:30,
        fontFamily:'serif',
        padding:8,
        fontWeight:"bold"
    },
    ratingbar:{

    },
    brand:{
        fontSize:16,
        marginLeft:40,
        opacity:.5
    },
    avatars:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"70%",
        padding:4,
        marginTop:20
    },
    avataicon:{
        marginLeft:10,
    },
    description:{
        width:"100%",
        marginTop:10,
        padding: 10,
    },
    bottomContainer:{
        width:"100%",
        display:"flex",
        justifyContent:"space-around"
    },
    bottomproduct:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        padding: 6,
        borderBottomColor:"black",
        borderWidth:0.1,
        backgroundColor:"white",
        marginTop:0,
    },
    txtbottomproduct:{
       fontSize:20,
       fontWeight:"bold"
    },
    addtocartSave:{
       display:"flex",
       flexDirection:'row',
       justifyContent:"space-between",
       width:"100%",
       alignItems:"center",
       padding:10,
       marginTop:10
    },
    addtocart:{
        width:320,
        marginRight:2,
        backgroundColor:"#b5b2b1",
        height:45,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:11
    },
    txtaddtocart:{
        fontSize:22,
        fontWeight:"bold",
        padding: 5,
        color:"white"
    }
    
})
