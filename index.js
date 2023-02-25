/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import Flexbox1 from './src/Flexbox1';
import Flexbox2 from './src/Flexbox2';

import Newlogin from './src/Newlogin';
import Pg3 from './src/Pg3';
import {name as appName} from './app.json';

import Homepage from './src/Homepage';
import Loginpage from './src/Loginpage';
import Settingspage from './src/Drawer/Settingspage';
import Profilepage from './src/Drawer/Profilepage';

import Cart from './src/Tab/Cart';
import Home from './src/Tab/Home';
import Order from './src/Tab/Order';
import Search from './src/Tab/Search';
import Functional from './src/Functional'
import { TabActions } from '@react-navigation/native';



AppRegistry.registerComponent(appName, () =>App);
