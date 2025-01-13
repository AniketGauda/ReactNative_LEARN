import React, { useState } from 'react';
import { View,TextInput,Text, StyleSheet } from 'react-native';

const Fun = ()=>{
    const [text,settext] = useState('');
    const [isFocused,setIsFocused] = useState(false);

    const validColors = [
        'red', 'blue', 'green', 'yellow', 'cyan', 'magenta', 'black', 'white', 'gray', 'purple',
        'pink', 'orange', 'brown', 'lime', 'teal', 'navy', 'maroon', 'silver', 'gold',
    ];
      

    const isValidColor = (color) => validColors.includes(color.toLowerCase());
    return (
        <View   >
            <Text style={styles.headerText}>TextInput Component</Text>
            <TextInput 
                style= {isFocused? styles.inputFocused : styles.input }  
                onChangeText={settext} 
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>setIsFocused(false)} 
                placeholder='Type a color name...'
                placeholderTextColor={'green'}
                value={text}
            />
            <Text style={text.length!=0 && isValidColor(text)?{color:`${text.toLowerCase()}`,fontSize:20,marginBottom:15}:styles.textCss}>This text will change color based on color input</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText : {
        color:'#39a7f1',
        fontSize:20,
        marginLeft:6,
        margin:7,
        textDecorationLine:'underline'
    },
    input : {
        height:50,
        borderWidth:1,
        borderColor:'gray',
        marginBottom:5,
        fontSize:16,
    },
    inputFocused : {
        borderWidth:3,
        color:'white',
        borderColor:'gray',
    },
    textCss : {
        fontSize:20,
        color:'#fff',
        marginBottom:15
    }
})

export default Fun;
