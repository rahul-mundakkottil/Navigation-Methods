import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import  Icon from "react-native-vector-icons/MaterialIcons";

import Loginpage from './src/Loginpage'
import Newlogin from './src/Newlogin'
import Homepage from './src/Homepage'
import Profilepage from'./src/Drawer/Profilepage'
import Settingspage from'./src/Drawer/Settingspage'
import DrawerDesign from "./src/Drawer/DrawerDesign"
import Aboutuspage  from "./src/Drawer/Aboutuspage"
import Productpage  from "./src/Drawer/Productpage"
import Cart from "./src/Tab/Cart"
import Category from "./src/Tab/Category"
import Order from "./src/Tab/Order"
import Search from "./src/Tab/Search"
import Home from './src/Tab/Home'

const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const Tab=createMaterialTopTabNavigator();

  function MyStack() {
    return( 
      <Stack.Navigator>
           <Stack.Screen
              name='Loginpage'
              component={Loginpage}
             //options ={{headerShown:false}}
        />
           <Stack.Screen
              name='Homepage'
              component={Homepage}
             // options ={{headerShown:false}}
        />
          <Stack.Screen
              name='Drawer'
              component={MyDrawer}
          
          />
          <Stack.Screen
              name='Tab'
              component={Mytoptab}

          
          />
          <Stack.Screen
             name='Newlogin'
             component={Newlogin}
             />
           
         
      </Stack.Navigator>

    )
  }
      function MyDrawer(){
        return(
         <Drawer.Navigator
            drawerContent={(props)=> <DrawerDesign{...props}/>} >        
             <Drawer.Screen  name='Profilepage'  component={Profilepage} />
             <Drawer.Screen  name='Settingspage' component={Settingspage} />
             <Drawer.Screen  name='Aboutuspage'  component={Aboutuspage} />
             <Drawer.Screen  name='Productpage' component={Productpage} />
         </Drawer.Navigator>


        )

      }
       function Mytoptab(){
        return(
        <Tab.Navigator screenOptions={{
          tabBarLabelstyle:{fontSize:12 },
          tabBarItemStyle:{width:100},
          tabBarStyle:{backgroundColor:'#93C5E6' }
        }} >

           <Tab.Screen name='Home' component={Home} 
            options ={{ tabBarActiveTintColor:'red', tabBarInactiveTintColor:'white',
              tabBarIcon : ({focused})=>focused ? <Icon name='home' size={20}  color='blue' /> : <Icon name='home' size={20} color='grey'/>    }} />
           <Tab.Screen name='Search' component={Search}
           options={{tabBarActiveTintColor:'red', tabBarInactiveTintColor:'white',
            tabBarIcon: ({focused})=>  focused ? <Icon name='home' size={20} color='blue'/> : <Icon name='home' size={20} color='grey'/>  }} />
           <Tab.Screen name='Cart' component={Cart}
           options={{tabBarActiveTintColor:'red', tabBarInactiveTintColor:'white',
             tabBarIcon:({focused})=>  focused ? <Icon name='home' size={20} color='blue'/> : <Icon name='home' size={20} color='grey'/>   }}  />
           <Tab.Screen name='Order' component={Order}
           options={{tabBarActiveTintColor:'red', tabBarInactiveTintColor:'white',
             tabBarIcon:({focused})=> focused ? <Icon name='home' size={20} color='blue'/> : <Icon name='home' size={20} color='grey'/>}}  />
             <Tab.Screen name='Newlogin' component={Newlogin}
           options={{tabBarActiveTintColor:'red', tabBarInactiveTintColor:'white',
             tabBarIcon:({focused})=> focused ? <Icon name='home' size={20} color='blue'/> : <Icon name='home' size={20} color='grey'/>}}  />
  
  
        </Tab.Navigator>
        )
       }

    export default function App(){
      return(
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
      )
    }
