// 1.mounting( 1.constructor 2.getderiverstatefromprops 3.render 4.componentdidmount)
//it happens at the begining of a program(eg:eg:refreshing of page,one page to another page) and ,adding some components(View,Textinput,Scrollview,Text etc..) and change of design of components (eg; Height,Color,Borderwidth etc...),
//in each this case mounting happens that this design loading is happens
// 2.updating calls for every changes in the program like change in the state,props, variable(eg:button clickd,type text in TEXTINPUT) , for every changes in design of Components and adding and removal of components  but mounting and unmounting is related with every changes in the design of components and adding and removal of components thus updation it used to perform the functions 
// followed by every change in the program.
// for every updation static getderiverstate from props >render called 
//if we used shouldcomponentupdate function then for every updation,this updation 
//happens but that not showing in our display bcs this  fn used for avoid 
//design change in updation thus static getderivedsstatefromprops >shouldcomponentupdate
//will call but render not called
//3. unmounting in this happens in removal ,change design of components inthis Componentwillunmount() >componentdidmount()



import React ,{Component}from 'react'
import{ View,Text,TouchableHighlight } from 'react-native'
export default class Home extends Component{

    constructor(){          // not called for updation
       super();
       this.state={
        name:'rahul'
        }
      console.log('1.constructor')
      }

     componentDidMount(){                       // the inbuilt functions not need to call ,it automatically called
       console.log('4.componentdidmount')       // last when change of design of component
      }

     static getDerivedStateFromProps(){        //secondly called in every action
        console.log('2.static getDerivedStateFromProps')
        return null
     }

      shouldComponentUpdate(){                 //when it used then it activate on updation but no updation happents and constructor and render not calld
        console.log('shouldComponentUpdate')
       return null

      }
       componentDidUpdate(){       //calls after updation happents not for designchange
        console.log('componentDidUpdate')
       }
       componentWillUnmount(){                       //call when updation on design of components happents
        console.log('compoentWillUnmount is called ')
       }
      render(){                //call for every action
        console.log('3.render')
        return(
            <View style={{height:'100%',width:'100%' , backgroundColor:'yellow',alignItems:'center',justifyContent:'center'}}>
                <Text style={{ fontSize:22,fontWeight:'bold', color:'black'}}>{this.state.name}</Text>

                <TouchableHighlight style={{height:50,width:200,backgroundColor:'yellow',borderWidth:3,alignItems:'center',justifyContent:'center',
                   borderRadius:10,underlayColor:'black',}} onPress={()=>{this.setState({name:'RAHUL MM'}) ,console.log("button clicked")}}>
                     <Text style={{fontSize:15,fontWeight:'bold',color:'green',}}>UPDATE</Text>

                </TouchableHighlight>
            </View>
        )
      }



 }