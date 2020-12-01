import React from 'react'
import { View, Text,TextInput ,Image,StyleSheet,TouchableOpacity,Linking} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function LoginScreen(props) {
    return (
        
        <ScrollView>

           <Image
           style={{height:300}}
            source={{uri:"https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80"}}
           
           />

           {/* Text Inputs */}
           
           <TextInput
                style={styles.textInput}
                placeholder="Username"
                />

           <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                />
          
          <TouchableOpacity 
                style = {{marginTop : "10%",backgroundColor :'#694fad', width:180, height:40,alignSelf:"center",borderRadius:15}}
               
                >
                
                    <Text style={{paddingTop:10,  color:"white" ,alignSelf:"center"}}>
                        Sign In 
                    </Text>
                </TouchableOpacity>

            <Text style={{alignSelf:"center",marginTop:"4%"}}
           
            >
                Dont Have an account ? 
                <Text style={{color:"blue"}}
                      onPress={() =>props.navigation.navigate("Register")}
                >  Register Now !</Text>
            </Text>
           
          

            
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