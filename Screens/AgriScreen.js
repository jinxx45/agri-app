import React from 'react'
import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import AgriFormScreen from './AgriFormScreen';

const Stack = createStackNavigator();


 export default function AgriScreen(props) {
    return (
        <View>
                <ScrollView>
           <Image
           style={{height:300}}
            source={{uri:"https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80"}}
           
           />
      <Text>Agriculture is the science and art of cultivating plants and livestock.[1] Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on into the twenty-first.</Text>
      <Text>Agriculture is the science and art of cultivating plants and livestock.[1] Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities. The history of agriculture began thousands of years ago. After gathering wild grains beginning at least 105,000 years ago, nascent farmers began to plant them around 11,500 years ago. Pigs, sheep and cattle were domesticated over 10,000 years ago. Plants were independently cultivated in at least 11 regions of the world. Industrial agriculture based on large-scale monoculture in the twentieth century came to dominate agricultural output, though about 2 billion people still depended on into the twenty-first.</Text>

        <View>
        <TouchableOpacity 
                style = {styles.floatingButton}
                onPress={() =>props.navigation.navigate("SellBy")} 
               
                >
                
                    <Text style={{paddingTop:10,  color:"white" ,alignSelf:"center"}}>
                        SELL YOUR BY-PRODUCTS
                    </Text>
                </TouchableOpacity>
        </View>
     
        </ScrollView>

        </View>
            )
}


const styles = StyleSheet.create({
    floatingButton :
    {
        
        borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:220,
       position: 'absolute',                                          
       bottom: 5,                                                    
       right: 10,
       height:50,
       backgroundColor:'blue',
       borderRadius:10,
       
    }
})