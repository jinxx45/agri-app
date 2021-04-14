import React, { Component,useState } from 'react';
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Table, Row, Rows } from 'react-native-table-component';
import { useFonts } from 'expo-font';



import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

 
export default class ExampleOne extends Component {

    
  constructor(props) {
  
    super(props);
    this.state = {
      tableHead: ['Fertilizer', 'Nutrient %', 'Factor'],
      tableData: [
        ['Urea', '16%', '2.17'],
        ['SSP', '16%',  '6.25'],
        ['MOP', '60%',  '1.67'],
        ['DAP', '18%',  '5.55']
      ],
      area:0,
      nutrient:0,
      dose:0,

    }
  }

  FertiCal=()=>{
    var area = parseInt(this.state.area); 
    var nutrient = parseInt(this.state.nutrient);
    var dose = parseInt(this.state.dose);

    var temp = 100 / nutrient;
    var fert = temp*dose*area;

    alert(fert+" " +" lbs")
  }
 
  render() {
    const state = this.state;
    const area = this.area;

   

    
  
   

    return (
      <View style={styles.container}>

          
       

          <Text style={{textAlign:"center",marginBottom:10*vh,fontSize:20*vh,fontFamily:"MS"}}>Some Commonly Used Fertilizers </Text>

        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>

        <Text style={{fontSize:20*vh,fontFamily:"Bebas",textAlign:"center",marginTop:20*vh}}>Fertiler Calculator</Text>

        <TextInput
         placeholder="Area in Square Feet"
        value={area}
        style={{marginTop:13*vh,borderColor:"black",borderWidth:2*vh,padding:5*vh,paddingLeft:10*vh,}}
        onChangeText={area=>this.setState({area})}
        />
        <TextInput
         placeholder="Nutrient Content Required"
        value={area}
        style={{marginTop:13*vh,borderColor:"black",borderWidth:2*vh,padding:5*vh,paddingLeft:10*vh,}}
        onChangeText={nutrient=>this.setState({nutrient})}
        />
        <TextInput
         placeholder="Recommended Dose of Fertilizer"
        value={area}
        style={{marginTop:13*vh,borderColor:"black",borderWidth:2*vh,padding:5*vh,paddingLeft:10*vh,}}
        onChangeText={dose=>this.setState({dose})}
        />

<TouchableOpacity 
                style = {{marginTop : "10%",backgroundColor :'#694fad', width:180, height:40,alignSelf:"center"}}
                onPress={this.FertiCal}
                >
                
                    <Text style={{fontFamily:"Bebas",fontSize:20*vh,paddingTop:8*vh,  color:"white" ,alignSelf:"center"}}>
                        Calculate
                    </Text>
                </TouchableOpacity>

      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});