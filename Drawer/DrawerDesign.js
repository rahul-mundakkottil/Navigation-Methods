import React,{Component} from 'react'
import{
   View,
   Text,
   StyleSheet,
   Image



} from'react-native'
 export default class DrawerDesign extends Component{
    render(){
        return(
          
          <View style={Styles.viewdesign}>
            <View style={Styles.topbox}>
            <View style={Styles.profilecircle}>
               <Image source={require('../../assets/inmakes.png')} style={Styles.iconimage}></Image></View>
            <View style={Styles.textbox}>
               <Text style={Styles.topboxtext}>akshay MM</Text>
               <Text style={Styles.topboxtext}>akshaymmskp@gmail.com</Text>
               <Text style={Styles.topboxtext}>+91 6282925731</Text>
            </View>
            </View>
            <Text style= {Styles.textdesign} onPress={()=> this.props.navigation.navigate('Profilepage')}> PROFILE</Text>
            <Text style= {Styles.textdesign} onPress={()=> this.props.navigation.navigate('Settingspage')}> SETTINGS</Text>
            <Text style= {Styles.textdesign} onPress={()=> this.props.navigation.navigate('Aboutuspage')}> ABOUT US</Text>
            <Text style= {Styles.textdesign} onPress={()=> this.props.navigation.navigate('Productpage')}> PRODUCT</Text>
            
          </View>
        )
    }
 }
 const Styles=StyleSheet.create({

    viewdesign:{
        flex:1,
        backgroundColor:'yellow'
    },
    textdesign:{
        fontSize:15,
        color:'blue',
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10
        
    },
    topbox:{
      height:'30%',
      width:'100%',
      backgroundColor:'green',
      flexDirection:'row'

    },
    profilecircle:{
      height:100,
      width:100,
      backgroundColor:'white',
      marginLeft:10,
      marginTop:50,
      borderRadius:50

    },
    textbox:{
      height:100,
      width:150,
      backgroundColor:'black',
      marginLeft:10,
      marginTop:50,
      paddingLeft:5

    },
    topboxtext:{
      color:'white',
      fontSize:12,
      fontWeight:'bold',
      marginTop:10
    },
    iconimage:{
      height:'100%',
      width:'100%'
    }
 })
