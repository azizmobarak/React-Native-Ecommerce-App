var initial=[];


const CartReducer =(state=initial,action)=>{
    switch(action.type){
        case "cart" : 
            state = [state,...action.data];
            break;
        default:
            return [];
    }
}

export {CartReducer}