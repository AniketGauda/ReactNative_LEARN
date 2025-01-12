import React,{useState} from 'react';
import { View,Text,StyleSheet,Image,Button } from 'react-native';
import image from '../../assets/chess.jpg'

const Basic = ()=>{

    const [cnt,setcnt] = useState(0);

    return (
        <View>
            {/* View Component */}
            
                  <Text style={styles.headerText}>View Component</Text>
                  <View style={styles.box}>
                    <View style={styles.redBox}></View>
                    <View style={styles.greenBox}></View>
                    <View style={styles.blueBox}></View>
                  </View>
            
                  {/* View Component */}
            
                  {/* Text Component */}
            
                  <Text style={styles.headerText}>Text Component</Text>
                  <Text style={styles.textCss}>My First React Native Course.</Text>
                  <Text style={styles.textCss}>
                    Text Component can be <Text style={styles.bold}>nested</Text>
                  </Text>
            
                  {/* Text Component */}
            
                  {/* Image Component */}
            
                  <Text style={styles.headerText}>Image Component</Text>
                  <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/0/07/The_night_view_of_Kofu_City.jpg'}} style={styles.img} />
                  <Image source={image} style={styles.img} />
            
                  {/* Image Component */}
            
                  {/* Button Component */}
                    <Text style={styles.headerText}>Button Component</Text>
                    <Button title="Click Me" onPress={()=>setcnt(prev=>prev+1)} color={'#841584'} />
                    <Text style={styles.btnText}>Count is: <Text style={{color:'cyan'}}>{cnt}</Text></Text>
            
                  {/* Button Component */}
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
      box : {
        flexDirection:'row',
        justifyContent:"space-around"
      },
      redBox : {
        width:50,
        height:50,
        backgroundColor:'red'
      },
      greenBox : {
        width:50,
        height:50,
        backgroundColor:'green'
      },
      blueBox : {
        width:50,
        height:50,
        backgroundColor:'blue'
      },
      textCss : {
        color:'#fff',
        fontSize:16,
        marginLeft:30,
        margin:5
      },
      bold : {
        fontWeight:'900',
        color : 'yellow'
      },
      img : {
        width:150,
        height:150,
        margin:10,
        marginBottom:1,
        marginLeft:30
      },
      btnText : {
        color:'#fff',
        fontSize:18,
        padding:10
      }
})

export default Basic;
