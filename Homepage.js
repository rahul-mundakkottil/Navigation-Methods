import React,{Component} from 'react'
import{
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight


}from 'react-native'

class FlexContend extends Component{
render(){
 return(
    <View>
        <Text style={{ color:'white',fontSize:20}}> Hi My Name Is {this.props.name}</Text>
    </View>

 )
}
}
export default class Homepage extends Component{
constructor(){
    super();
    this.state={
        main_text:'RAHUL',
        sub_text:'M.M',
        name:'babu'
    
    }
}
componentDidCatch(){
    console.log(this.props.route.params.username)
}
updatetext(){
    this.setState({
        main_text:'WELCOME TO',
         sub_text:'REACT-NATIVE'  
    })
 }
 
 
render(){
    return(
        <View style={styles.viewstyle}>
            <Text style={styles.text1}>Hai</Text>
            <Text style={styles.text2}>{this.state.main_text}</Text>
            <Text style={styles.text3}>{this.state.sub_text}</Text>
            <Text style={styles.text3}>{this.state.name}</Text>
            <TextInput style={styles.textinput}  placeholder='update'
        placeholderTextColor='red'
        maxLength={10}
        secureTextEntry={true}
        onChangeText={(username)=> this.setState({name:username})}
        ></TextInput>
           <TouchableHighlight style={styles.th}  underlayColor="white" onPress={()=>this.updatetext()}>  
   
            <Text style={styles.text4}>UPDATE</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.th}  underlayColor="white"  onPress={()=>this.props.navigation.navigate('Drawer')}>  
   
           <Text style={styles.text4}>OPEN DRAWER</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.th}  underlayColor="white"  onPress={()=>this.props.navigation.navigate('Tab')}>  
   
           <Text style={styles.text4}>OPEN TAB</Text>
           </TouchableHighlight>
           <FlexContend name={this.props.route.params.username}></FlexContend>

        </View>



    )
}
}
  
const styles=StyleSheet.create({
    viewstyle:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'

    } ,
    text1:{
        fontSize:20,
        fontWeight:'bold',
        color:'green'
    },
    text2:{
        fontSize:25,
        fontWeight:'bold',
        color:'blue'
    },
    text3:{
        fontSize:30,
        fontWeight:'bold',
        color:'yellow'
    },
    textinput:{
       backgroundColor:'silver',
        height:40,
        width:'70%',
        borderColor:'white',
        borderWidth:3,
        paddingLeft:40,
       

    },
    th:{
        backgroundColor:'grey',
        height:40,
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:10,
        underlayColor:'white'

    },
    text4:{
        fontSize:20,
        fontWeight:'bold',
        color:'brown'
    },


})