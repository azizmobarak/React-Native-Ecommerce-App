var initial =[]


const SuggestionReduser = (state=initial,action)=>{

console.log(action)

   switch(action.type){
       case "suggest" : 
         return state=action.payload;
        default :
          return state;
   }
}

export {SuggestionReduser}