

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Signin from './src/screens/auth/Signin'

const App = () => {
  return(
    <>
  <StatusBar barStyle = "dark-content"/>
  <SafeAreaView style={style.container}>
     <Signin/>
  </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }

});

export default App;
