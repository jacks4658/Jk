import * as React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import  {  Provider  as  PaperProvider  } from'react-native-paper' ; 
import App from './App';
import {name as appName} from './app.json';
import { max } from 'react-native-reanimated';
import { YellowBox} from 'react-native';




export default function Main() {
    return (

      

      <PaperProvider>
        <App />
      </PaperProvider>
    );
  }
  
  YellowBox.ignoreWarnings([
    'Require cycle:'
  ])
  console.disableYellowBox = true;


AppRegistry.registerComponent(appName, () => Main);