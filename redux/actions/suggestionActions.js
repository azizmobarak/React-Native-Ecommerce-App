

const Suggestion =async(type,dispatch)=>{

    var data =[
       {
           name:"Sunscreen"
       },
       {
           name:"InisFree"
       },
       {
           name:"Ipad"
       },
       {
           name:"Iphone"
       },
       {
           name:"Windows"
       },
       {
           name:"Lacost"
       },
       {
           name:"Jordan Air"
       }
    ]
    
    
    await dispatch({
           type:type,
           payload:data
       })
    }
    
    
    export {Suggestion}