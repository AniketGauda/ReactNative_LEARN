import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const App = ()=>{
  const [hasFocus,setHasFocus] = useState(false);
  const [text,setText] = useState('You can type in me');
  return (
    <ScrollView style={{
      backgroundColor:'lightyellow',
      padding:2
    }}>
      <Text style={styles.textCSS}>Some text</Text>
      <View>
        <Text style={styles.textCSS}>Some other text</Text>
        <Image source={{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png'
        }} style={{width:200,height:200}} />
      </View>
      <TextInput 
        style={[
          styles.textInputCSS,
          hasFocus ? styles.textFocusCSS : styles.textCSS
        ]} 
        onFocus={()=>setHasFocus(true)}  
        onBlur={()=>{
          console.log("Back to Normal.");
          setHasFocus(false);
        }}
        value={text}
        onChange={setText} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textCSS : {
    fontSize:16,
    paddingLeft:5,
    color:'#000'
  },
  textFocusCSS : {
    fontSize:16,
    color:'red',
    borderWidth:3,
    borderColor:'black'
  },
  textInputCSS : {
    height:50,
    borderWidth:1,
    borderColor:'#000'
  }
})

export default App;
