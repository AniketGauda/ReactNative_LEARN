import React from 'react';
import { View, Text } from 'react-native';

const App = ()=>{
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'lightcyan'
    }}>
      <Text style={{
        fontSize:18,
        textAlign:'center'
      }}>Try editing me! 🎉</Text>
    </View>
  )
}

export default App;
