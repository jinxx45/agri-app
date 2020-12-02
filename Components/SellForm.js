import React from 'react'
import { View, Text,TextInput,StyleSheet } from 'react-native'
import PhotoUpload from 'react-native-photo-upload'

export default function SellForm() {
    return (
        <View>
            <Text>PRODUCT DETAILS</Text>

             <TextInput
                style={styles.textInput}
                placeholder="Product Name"
                />


             <TextInput
                style={styles.textInput}
                placeholder="Product Description"
                />
            <Text>SET A PRICE</Text>


            <TextInput 
                    style={styles.textInput}
                    keyboardType = 'numeric'
  
            /> 

            <Text>PRODUCT IMAGES</Text>

            <PhotoUpload
 ></PhotoUpload>



            
        </View>
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