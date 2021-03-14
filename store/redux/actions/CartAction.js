
import AsyncStorage from '@react-native-community/async-storage';




const CartLength =async(dispatch)=>{
    
    var data =await AsyncStorage.getItem('cart');
    var cartTab =await JSON.parse(data);

    await dispatch({
           type:"count",
           payload:cartTab.length
       })
    }
    
    
    export {CartLength}