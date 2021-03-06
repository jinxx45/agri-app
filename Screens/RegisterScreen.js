import React , {useState} from 'react'
import { View, Text ,ScrollView,Image,TextInput,StyleSheet ,TouchableOpacity} from 'react-native'
import { useFonts } from 'expo-font';

import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

export default function RegisterScreen() {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf"),
        Ham : require("../assets/fonts/Hamburge-Free.ttf")
    });

    function sendCred(){
        fetch("http://10.0.2.2:3000/createUser",{
            method :"POST",
            headers :{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                "email":email,
                "password":password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    if (!loaded) {
        return null;
      }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: "9%"}}>

           <Image
           style={{height:300}}
            source={{uri:"https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80"}}
           
           />

           {/* Text Inputs */}
           
          
           <TextInput
                style={styles.textInput}
                placeholder="Email ID"
                value={email}
                onChangeText={(text)=>setEmail(text)}

                />
           <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text)=>setPassword(text)}
                />
           <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
                />
          
          <TouchableOpacity 
                style = {{marginTop : "10%",backgroundColor :'#694fad', width:180, height:40,alignSelf:"center",borderRadius:15}}
                onPress={()=>sendCred()}
                >
                
                    <Text style={{paddingTop:10,  color:"white" ,alignSelf:"center"}}>
                        Register
                    </Text>
                </TouchableOpacity>

          
          

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput :{
        height: 40,
         borderColor: 'gray', 
         borderWidth: 1,
         width:"80%",
         alignSelf:"center",
         padding:"2%",
         borderRadius:15,
         marginTop:"10%",
         
    }
})