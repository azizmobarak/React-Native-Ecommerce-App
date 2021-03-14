import AsyncStorage from '@react-native-community/async-storage';
import React,{useState,useEffect,useRef} from 'react'
import {View,Text,StyleSheet,TouchableHighlight,Image,ScrollView,Button} from 'react-native';
import {RadioButton} from "react-native-paper";
import Header from '../components/header';
import RBSheet from "react-native-raw-bottom-sheet";
import { TouchableOpacity } from 'react-native-gesture-handler';



export default Cart = ({navigation})=>{
    return (
        <Header screen="Cart" component={Main} navigation={navigation} />
    )
}

const Main = ({navigation})=>{

const [Cart,setCart] = useState([]);
const sheet = useRef();
const [selectAll,setSelectAll] = useState("unchecked");
const [total,settotal] = useState(0);

const getTotal=()=>{
 var total =0;
        Cart.map(item=>{
         total = total+parseInt(item.price);
        });
        settotal(total);
}
    
const getCart=async()=>{
    var data =await AsyncStorage.getItem('cart');
    var cartTab =await JSON.parse(data);
    setCart(cartTab==null ? 0 : cartTab);
}

const onSelectAll=()=>{
setSelectAll(selectAll === "checked" ? "unchecked" : "checked")
console.log(selectAll)
}

useEffect(()=>{
    getCart();
    sheet.current.open(); 
},[]);

 useEffect(()=>{
    getTotal();
 });

    return (
        <ScrollView>
        <View style={styles.container}>
            
            <View style={styles.header}>
                <TouchableHighlight onPress={()=>console.log("edite")}>
                    <Text style={styles.headertxt}>Edit</Text>
                </TouchableHighlight>
                 
                <View style={styles.headerRadio}>
                <Text style={styles.headertxt}>All</Text>
                <RadioButton
                   value="all"
                   status={selectAll}
                   onPress={() =>onSelectAll()}
                   color="blue"
                  />
                </View>  

               </View>

               <View style={styles.line}></View>

               <View style={{ width:"100%" }} >
                   {
                       Cart.map((item,i)=>{
                           return(
                    <RadioButton.Group key={item.id} onValueChange={newValue => setSelectAll(newValue)} value={selectAll}>
                    <View  style={{ width:"100%",dipslay:'flex',alignItems:"center" }}>
                        <View style={styles.cartproduct}>
                        <Image style={styles.productimg} source={{ uri:item.url }} />
                            <View style={styles.productDetailsContainer}>
                            <Text style={styles.producttitle}>{item.title}</Text>
                            <View style={styles.carddetails}>
                              <View>
                                <Text style={styles.productprice}>{item.price}$</Text>
                                <Text>Color: {item.color}</Text>
                            </View>
                            <View>
                                <Text style={styles.quantity}>{item.number}</Text>
                                <Text>size: {item.size}</Text>
                            </View>
                            <View style={styles.radiobutton}>
                            <RadioButton
                               value={"product"+i}
                               color="blue"
                               style={{ width:50 }}
                            />
                            </View>
                              </View>
                           </View>
                        </View>
                        <View style={styles.productLine}>
                        </View>
                    </View>
                    </RadioButton.Group>
                           )
                       })
                   }
               </View>

    <RBSheet
          ref={sheet}
          height={200}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
     <View style={{ width:"100%" }}>
     
          <View style={styles.perecntage}>
           <View>
              <Text style={styles.txtpricetotal}>${total}</Text>
              <Text style={styles.txtprice}>25% - ${(25*total)/100}</Text>
           </View>
          </View>

          <View style={styles.sheet}>
              <Text style={styles.txttotal}>Total</Text>
              <Text style={styles.txtpriceend}>
               ${total-((25*total)/100)}
              </Text>
          </View>

         <View style={styles.btncart}>
              <TouchableOpacity onPress={()=>console.log('hello')} style={styles.nextButton}>
                   <Text style={styles.btncarttext} >Next</Text>
              </TouchableOpacity>
         </View>

     </View>
        </RBSheet>


       <View style={{ marginTop:100 }}>

       <View style={styles.btncart}>
              <TouchableOpacity onPress={()=>{/*sheet.current.open()*/ navigation.navigate('CartDone') }} style={styles.nextButton}>
                   <Text style={styles.btncarttext} >Open</Text>
              </TouchableOpacity>
         </View>

       </View>
        </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop:50,
        width:"100%"
    },
    header:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        padding:10,
    },
    headertxt:{
        fontSize:22,
        fontWeight:"bold",
    },
    headerRadio:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    line:{
        borderBottomColor:"black",
        borderBottomWidth:1,
        marginTop:10
    },
    cartproduct:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"100%",
        padding:10,
    },
    productimg:{
        width:100,
        height:100,
        borderRadius:10
    },
    producttitle:{
        fontSize:26,
        fontFamily:"serif"
    },
    productprice:{
        fontSize:25,
        fontWeight:"bold"
    },
    quantity:{
        fontSize:25,
        fontWeight:"bold"
    },
    carddetails:{
        display:'flex',
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    productDetailsContainer:{
    width:"70%",
    display:'flex',
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"flex-start"
    },
    radiobutton:{
        
    },
    sheet:{
        height:80,
        display:"flex",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
    },
    perecntage:{
        padding:10,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:'flex-end',
        alignItems:"flex-end"
    },
    txttotal:{
        fontWeight:"bold",
        fontSize:27,
        fontFamily:"serif"
    },
    txtprice:{
        fontSize:17
    },
    txtpricetotal:{
        marginLeft:20,
        fontSize:24
    },
    txtpriceend:{
        fontSize:28
    },
    btncart:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },
    nextButton:{
        width:300,
        backgroundColor:"blue",
        padding: 10,
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        zIndex:9999
    },
    btncarttext:{
        color:"white",
        fontSize:15,
    },
    productLine:{
        marginTop:10,
        width:"90%",
        borderColor:"black",
        borderWidth:0.6,
        borderColor:"gray",
        borderWidth:0.5,
    }
})
