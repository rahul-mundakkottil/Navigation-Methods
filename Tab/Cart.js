import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,
     ScrollView
} from 'react-native'

 export default class Cart extends Component{
render(){
    return (
       < View style={styles.viewstyle}>
         <ScrollView style={{width:'95%', height:'100%', backgroundColor:'blue'}}>
          <View  style={{ width:'100', height:'95%',backgroundColor:'white'}}></View>
         </ScrollView>
       
       </View>

    )
}
 }
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'blue',
    fontSize:20,
    fontWeight:'bold'
}
 })
