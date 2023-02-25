import React,{Component} from 'react'
import {
     View,
     Text,
     StyleSheet,
     ActivityIndicator,
     FlatList
} from 'react-native'
import { color } from 'react-native-reanimated';
import axios from 'axios';

 export default class Home extends Component{
    constructor(){
            super();
            this.state={lodder:false,
                 Data:[]}
    }
    getData () {
        this.setState({lodder: true})
      fetch('https://api.sampleapis.com/coffee/hot')
      .then((response)=> response.json())
      .then((response)=>{
         if(response.length >0){this.setState({Data:response})}
          this.setState({lodder: false})
          console.log('fetch data is',response)}  )
      .catch((error)=> {
        this.setState({lodder: false})
        console.log('error is',error)})

    }
     axiosfunction(){
        this.setState({lodder:true})
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((response)=>{
            if(response.length >0){this.setState({Data:response})}
             this.setState({lodder: false})
             console.log('fetch data is',response.data)}  )
    
        .catch((error)=>{console.log('error is:',error)
        this.setState({lodder:false})})
     }
     
    componentDidMount () {
       // this.getData()
        }
render(){
    const RenderItem = ({item}) => (
        <View  style={styles.productbox}>
            <Text style={{fontSize:20 , fontWeight:'bold' ,color:'green'     }}>{item.title}</Text>
            <Text style={{fontSize:12 ,color:'brown'}}>{item.description}</Text>
        </View>
    )

    return (
        
       < View style={styles.viewstyle}>
         <ActivityIndicator size='large' color={'blue'} animating={this.state.lodder}/>
        <Text style={styles.textstyle}>HOME PAGE</Text>
        <Text style={styles.textstyle} onPress={()=>this.getData()}>fetch data</Text>
        <FlatList 
       style={{ width:'95%', marginTop :10}}
                  data={this.state.Data}
                 renderItem={RenderItem}
        
        />
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
},
 productbox:{
    width:'100%',
    padding:10,
    backgroundColor:'white',
    elevation:20,
    marginBottom:10

 }

 })
