import React from 'react'
import { View, Text ,StyleSheet ,Image , TouchableOpacity} from 'react-native'



export default function comm_card(props) {
    return (
        
        <View style= {styles.card} >
            
            {/* Image View */}
            
           
            <Image
                style={styles.cardImage}
                source={{uri : props.imageUri}}
                resizeMode = "center"
            />
            

            {/* Content and Button View */}
            
            <View style={{borderColor:"black", borderLeftWidth:0.4,}}>
                {/* Heading Text */}
                <Text style ={{marginStart:10,marginTop:6,fontSize:18 , color:props.headingColor}}>{props.Heading}</Text>
                {/* Content  */}
                <Text style= {{marginStart:10,marginTop:14 , maxWidth: "70%",fontSize:12 }}>{props.Content}</Text>
                {/* Button */}
                <TouchableOpacity style = {{marginTop:"5%" , marginStart:50 ,marginRight:"30%" }}>
                    <Text style={{backgroundColor:props.headingColor,height:35,paddingLeft:50,paddingTop:7,borderRadius:20}}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
             
            
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        height : "31%",
        width : "97%",
        backgroundColor:"#FFFFFF",
        marginTop: "2%",
        borderColor:"grey",
        borderWidth: 0.7,
        borderRadius:0,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 10,
        flexDirection: "row"
    },
    cardImage : {
        
        height: "100%",
        width : "35%"
        
    }
})
