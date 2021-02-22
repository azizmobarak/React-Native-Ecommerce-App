

const ProductAction =async(type,dispatch)=>{

var data =[
    {
        id:1,
        url : "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg",
        title : "macaroni",
        price :19,
        color:"red",
        size:"xxl"
    },
     {
        id:2,
        url : "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
        title:"white bread",
        price : 23,
        color:"yellow",
        size:"M"
        },
        {
            id:3,
            url : "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
            title:"poppy seed roll",
            price : 28,
            color:"brown",
            size:"XL"

        },
        {
            id:4,
        url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg",
         title:"apple pie",
         price : 89,
         color:"white",
        size:"XM"
        },
        {
            id:5,
            url:"https://www.medihelp.ro/public/posts/0/275/burger-chips-dinner-70497.jpg",
            title:" chicken quarters",
            price:38,
            color:"green",
            size:"xxl"
        },
        {
         id:6,
         url:"https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1534256595/Onboarding/Burger.jpg",
         title:" crayfish (crawfish)",
         price:44,
         color:"red",
         size:"XM"
        },
        {
            id:7,
            url :"https://ichef.bbci.co.uk/images/ic/832xn/p08nk96t.jpg",
            title:"vanilla ice cream",
            price:22,
            color:"blue",
            size:"xxl"
        }
]


await dispatch({
       type:type,
       payload:data
   })
}


export {ProductAction}