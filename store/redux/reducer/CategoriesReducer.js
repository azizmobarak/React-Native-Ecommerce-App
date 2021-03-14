var initial =[]


const CategoriesReduce = (state=initial,action)=>{
    
   switch(action.type){
       case "categories" : 
         return state=action.payload;
        default :
          return state;
   }
}

export {CategoriesReduce}