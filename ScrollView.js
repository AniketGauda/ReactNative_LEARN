import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function Fun() {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>ScrollView Component</Text>
        <ScrollView 
            nestedScrollEnabled={true}
            style={styles.scrollView} 
            contentContainerStyle={styles.scrollViewContent}
            bounces={true}
            showsVerticalScrollIndicator={false}
        >
            {
                [...Array(20)].map((_,idx)=>{
                    return (
                        <View key={idx} style={styles.box}>
                            <Text style={styles.boxText}>{idx+1}</Text>
                        </View>
                    )
                })
            }   
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        marginBottom:20
    },
    headerText : {
        color:'#39a7f1',
        fontSize:20,
        marginLeft:6,
        margin:7,
        textDecorationLine:'underline'
    }, 
    scrollView :{
        height:200,
        backgroundColor:'#f0f0f0'
    },
    scrollViewContent : {
        padding:20
    }, 
    box : {
        height : 40,
        marginBottom : 10,
        backgroundColor:'#3498db',
        justifyContent:'center',
        alignItems:'center'
    },
    boxText : {
        textAlign:'center',
        fontSize:16,
    }
})
