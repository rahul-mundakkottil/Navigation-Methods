import React,{Component} from "react"
import{
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight
}from 'react-native'

export default class Login extends Component{
  constructor(){
    super();
    this.state=({
      name:'akshay'
    })

  }

  Updatevalue(username){
    console.log(username)
    this.setState({name:username})

  }
  render(){
    return(
      <View style= {styles.container}>
        <ImageBackground source={require('../assets/image.jpg')}
        style={styles.backgroundImage}>
           <Image source={require('../assets/inmakes.png')} 
           style ={styles.logo}> 

           </Image> 
           <Text
           style ={styles.textview} >WELCOME TO REACT NATIVE JOURNEY</Text>
           <TextInput style ={styles.inputview}
           placeholder='username'
           placeholderTextColor='green'
           maxLength={10}
           onChangeText={(username)=>this.Updatevalue(username)}>

           </TextInput>
           <TextInput style={styles.inputview}
           placeholder='password'
           placeholderTextColor='green'
           secureTextEntry={true}>

           </TextInput>
           <TouchableHighlight style={styles.buttonview}
           underlayColor='transparent'
           onPress={()=>this.props.navigation.navigate('Homepage',{username: this.state.name})}>
            <Text style={styles.textsize}>login</Text>
           </TouchableHighlight>
        </ImageBackground>

       
      </View>
    )
  }

}

const styles =StyleSheet.create({
  container :{
    flex:1,
    height:'100%',
    width:'100%',
    backgroundColor:'red'
  },
  backgroundImage:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  
  },
  logo:{
    height:'30%',
    width:'30%'
  },
  textview:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  inputview:{
    width:'60%',
    height:35,
    backgroundColor:'green',
    borderWidth:2,
    marginTop:40,
    paddingLeft:20
  },
  buttonview:{
    width:'50%',
    height:35,
    backgroundColor:'red',
    marginTop:50,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  textsize:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'

  }


})






















