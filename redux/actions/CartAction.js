import AsyncStorage from '@react-native-community/async-storage';



const addToCart=async(item,dispatch)=>{

    // if(typeof(AsyncStorage.getItem('cart'))!="undefined"){
    //     console.log("addto async")
    //     var tab = await AsyncStorage.getItem("cart");
    //     var parsedTab = await JSON.parse(tab)
    //     console.log("addto",parsedTab)
    //     parsedTab.push(item);
    //     AsyncStorage.setItem(JSON.stringify(parsedTab));
    // }else{
      
       await AsyncStorage.removeItem("cart");
  //  }

await dispatch({
    type:"cart",
    data:item
})

}

export {addToCart}