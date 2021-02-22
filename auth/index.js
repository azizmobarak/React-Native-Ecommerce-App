import React,{useState,createContext, Children} from 'react';
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext();


export const AuthProvider =({children})=>{

const [user,setUser]=useState(null);

return(
    <AuthContext.Provider
    value={{ 
        user,
        setUser,
        login:async (email,password)=>{
            try{
                await auth.signInWithEmailAndPassword(email,password);
            }catch(err){
                console.log(err);
            }
        },
        register:async(email,password,fullName)=>{
            try{
             await auth.createUser(email,password,fullName);
            }catch(err){
                   console.log(err)
            }
        },
        logout:async()=>{
           try{
            await auth.signOuth();
           }catch(err)
           {
               console.log(err)
           }
        }
     }}
    >
    {children}
    </AuthContext.Provider>
)
}