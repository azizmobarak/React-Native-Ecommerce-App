var initial =[]


const ProductDetailsReducer = (state=initial,action)=>{
    
   switch(action.type){
       case "details" : 
         return state=action.payload;
        default :
          return state;
   }
}

export {ProductDetailsReducer}