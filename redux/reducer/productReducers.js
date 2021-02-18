var initial =[]


const productReducer = (state=initial,action)=>{
    
   switch(action.type){
       case "data" : 
         return state=action.payload;
        default :
          return state;
   }
}

export {productReducer}