var initial =0;


const Cartcount = (state=initial,action)=>{
    
   switch(action.type){
       case "count" : 
         return state=action.payload;
        default :
          return state;
   }
}

export {Cartcount}