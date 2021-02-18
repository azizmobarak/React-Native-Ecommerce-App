

const ProductAction =async(type,dispatch)=>{

var data =[
    {
        id:1,
        url : "https://img.etimg.com/thumb/msid-75176755,width-640,resizemode-4,imgsize-612672/effect-of-coronavirus-on-food.jpg",
        title : "poduct 1",
        price :19
    },
     {
        id:2,
        url : "https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/master/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg",
        title:"product 2",
        price : 23
        },
        {
            id:3,
            url : "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
            title:"product 3",
            price : 28

        },
        {
            id:4,
        url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg",
         title:"product 3",
         price : 89
        },
        {
            id:5,
            url:"https://www.medihelp.ro/public/posts/0/275/burger-chips-dinner-70497.jpg",
            title:"product 4",
            price:38
        },
        {
            id:6,
         url:"https://media-cdn.grubhub.com/image/upload/c_scale,w_1650/q_50,dpr_auto,f_auto,fl_lossy,c_crop,e_vibrance:20,g_center,h_900,w_800/v1534256595/Onboarding/Burger.jpg",
         title:"product 5",
         price:44
        },
        {
            id:7,
            url :"https://ichef.bbci.co.uk/images/ic/832xn/p08nk96t.jpg",
            title:"product 6",
            price:22
        }
]


await dispatch({
       type:type,
       payload:data
   })
}


export {ProductAction}