

const passProduct =async(product,dispatch)=>{

    await dispatch({
           type:"details",
           payload:product
       })
    }
    
    
    export {passProduct}