import React,{useState} from 'react'
import {View,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import Header from '../components/header';
import {Item,Input,Icon,Label,CheckBox,ListItem,Body,Text} from "native-base";
//react-native-hide-show-password-input
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';

export default Register = ({navigation})=>{
    return (
       <Header screen="Register" component={Main} navigation={navigation} />
    )
}

const Main=(props)=>{

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [firstName,setfirstName]=useState('');
const [lastName,setLastName]=useState('');
const [secureText,setSecureText]=useState(true);
const [isChecked,setisChecked]=useState(false);


function CreateUser(){
if(email!="" && email!=null && password!="" && password!=null && isChecked==true ){
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.log("last one",error);
    });
}
}


    return (
        <ScrollView>
        <View style={styles.Container}>
             <View style={styles.form}>
             <Item rounded style={styles.inputstyle}>
                <Input
                 placeholder="First Name"
                 value={firstName}
                 onChangeText={text =>setfirstName(text)}
                 underlineColor="transparent"
                />
                </Item>
                <Item rounded style={styles.inputstyle}>
                <Input
                 placeholder="Last Name"
                 value={lastName}
                 onChangeText={text =>setLastName(text)}
                 underlineColor="transparent"
                />
                </Item>
                <Item rounded style={styles.inputstyle}>
                <Input
                 placeholder="Email"
                 value={email}
                 onChangeText={text =>setemail(text)}
                 underlineColor="transparent"
                />
                </Item>

                 <Item rounded style={styles.inputstyle}>
                  <Input secureTextEntry={secureText} onChangeText={(text)=>setpassword(text)} placeholder='password'/>
                  <Icon active onPress={()=>setSecureText(secureText==true ? false : true)} name={secureText==true ? "eye-off" : "eye"} />
                 </Item>

                 <View style={styles.termscheckboxContainer}>
                 <ListItem>
                  <CheckBox onPress={()=>setisChecked(isChecked==false ? true : false)} checked={isChecked} />
                  <Text style={{ marginLeft:10 }}>Accept the terms and conditions</Text>
                </ListItem>
                 </View>
              

                <TouchableOpacity 
                 onPress={()=>CreateUser()}
                style={styles.submit}>
                    <Text style={styles.submittxt}>Sign up</Text>
                </TouchableOpacity>

               

                <View style={styles.divid}>
                    <View style={styles.line} />
                    <Text style={styles.or}>or</Text>
                    <View style={styles.line} />
                </View>

               <View style={styles.secondpanel}>
               <TouchableOpacity style={styles.facebook}>
                    <Text style={styles.txtsignwith}>Sign In with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.google}>
                    <Text style={styles.txtsignwith}>Sign In with Google</Text>
                </TouchableOpacity>

               <View style={styles.signupqs}>
               <Text style={styles.signupqstxtA}>Already have an account?</Text>
                <TouchableOpacity 
                onPress={()=>props.navigation.navigate('Login')}
                style={styles.signupqsbtn}>
                  <Text style={styles.signupqstxtB}>Sign In</Text>
                </TouchableOpacity>
               </View>
               </View>
             </View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    Container:{
        flex:1,
        padding:10
    },
    form:{
        marginTop:"20%",
        flex:0.7,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    inputemail:{
        width:"80%",height:50,backgroundColor:"transparent",
        borderColor:"black",borderWidth:0.5,borderRadius:15,
        borderTopEndRadius:15,borderTopLeftRadius:15,
        fontSize:20,padding:10
    },
    inputstyle:{
        width:"80%",height:50,marginTop:10,backgroundColor:"transparent", 
        borderColor:"black",borderWidth:0.5,borderRadius:15,
        borderTopEndRadius:15,borderTopLeftRadius:15,
        fontSize:20,padding:0,
    },
    submit:{
        width:"80%",
        height:50,
        display:'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#4d36cf",
        marginTop:30,
        borderRadius:15
    },
    submittxt:{
        fontSize:22,
        color:"white",
        fontWeight:"bold"
    },
    passforgot:{
        marginTop:20
    },
    divid:{
        display:"flex",
        justifyContent:"space-around",
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
    },
    line:{
        height:1,
        backgroundColor:"gray",
        width:140,
        marginTop:2
    },
    or:{
      padding:5,
    },
    secondpanel:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:20,
        width:"100%"
    },
    facebook:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0c249c",
        height:45,
        width:"80%",
        borderRadius:10
    },
    txtsignwith:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    google:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#676e63",
        height:45,
        width:"80%",
        borderRadius:10,
        marginTop:5
    },
    signupqs:{
        marginTop:20,
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row",
    },
    signupqstxtA:{
        opacity:.5,
        marginRight:10
    },
    signupqstxtB:{
        fontWeight:"bold"
    },
    passwordContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    termscheckboxContainer:{
        width:"90%",
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
    }
})