import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet
} from 'react-native'

 export default class Order extends Component{
render(){
    return (
       < View style={styles.viewstyle}>
        <Text style={styles.textstyle}>ORDER PAGE</Text>
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
