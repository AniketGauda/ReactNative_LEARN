// 1st Component.

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const App = ()=>{
  return <Text style={styles.textCSS}>Hello, I am your app!</Text>
}

export default App;

const styles = StyleSheet.create({
  textCSS : {
    fontSize:18,
    color:'blue',
    textAlign:'center'
  }
})
