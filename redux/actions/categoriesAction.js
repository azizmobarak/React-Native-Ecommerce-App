

const categoriesAction =async(type,dispatch)=>{

    var data =[
        {
            id:1,
            url : "https://static.onecms.io/wp-content/uploads/sites/14/2020/07/15/fashion-header-1-2000.jpg",
            title : "fashion",
        },
         {
            id:2,
            url : "https://s21425.pcdn.co/wp-content/uploads/2019/12/FSSAI-to-Present-Second-Eat-Right-Mela-in-Delhi-1024x737.jpg",
            title:"Food",
            },
            {
                id:3,
                url : "https://static.toiimg.com/thumb/msid-77413764,width-640,resizemode-4/77413764.jpg",
                title:"mobiles",
    
            },
            {
                id:4,
            url:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
             title:"computers",
            },
            {
                id:5,
                url:"http://www.wholesaleclothesturkey.com/women-clothes-wholesale-istanbul%20(1).jpg",
                title:"women",
            },
            {
                id:6,
             url:"https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/24675/225007/2017-New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Patchwork-Casual__24759.1549259591.jpg?c=2",
             title:"Men",
            },
            {
                id:7,
                url :"https://www.rachelpaulsfood.com/wp-content/uploads/DSC_0026-2.jpg",
                title:"drink",
            }
    ]
    
    
    await dispatch({
           type:type,
           payload:data
       })
    }
    
    
    export {categoriesAction}