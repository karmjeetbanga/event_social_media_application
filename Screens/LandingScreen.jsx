import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function LandingScreen({ navigation }) {

  function goToCreateEvent(){
    navigation.navigate('Create Event');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize:50,fontWeight: 'bold',color:'#240D57'}}> Imagine if{'\n'}</Text>
        <Text style={{fontSize:45,fontWeight: 'bold',color:'#8456EC'}}> Snapchat{'\n'}</Text>
        <Text style={{fontSize:50,fontWeight: 'bold',color:'#240D57'}}> had events.</Text>
         <View style={styles.container}>
      </View>
      </View>
      <View style={styles.middleView}>
        <Text style={{fontSize:15,color:'#4F4F4F',alignItems:'center'}}>Easily host and share events with your friends acress any social media.</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image 
        style={styles.Image}
        source={require('../Images/landing.png')}
        />
    </View>
    <View>
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>goToCreateEvent()}>

        <Text style={styles.buttonText}> 🎉 Create my event</Text>
     
      </TouchableOpacity>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    width:'100%',
        height:'10%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

  },
  middleView: { 
        width:'80%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',  
  },
  imageContainer: {
    width:'100%',
        height:'40%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
  },

  Image: {
    width: 300,
    height: 300,

  },
  button: {
    alignItems: "center",
    backgroundColor: "#8456EC",
    padding: 10,
    borderRadius: 10,
    width: 250,
    height: 50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

});