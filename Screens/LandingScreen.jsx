import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function LandingScreen({ navigation }) {

  function goToCreateEvent(){
    navigation.navigate('CreateScreen');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{fontSize:50,fontWeight: 'bold',color:'#240D57'}}> Imagine if{'\n'}</Text>
        <Text style={{fontSize:45,fontWeight: 'bold',color:'#8456EC'}}> Snapchat{'\n'}</Text>
        <Text style={{fontSize:50,fontWeight: 'bold',color:'#240D57'}}> had events.</Text>
      </View>
      <View style={styles.middleView}>
        <Text style={{fontSize:15,color:'gray',alignItems:'center'}}>Easily host and share events with your friends acress any social media.</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
        style={styles.Image}
        source={{
          uri: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T223339Z&X-Amz-Expires=86400&X-Amz-Signature=63fdd4246622a1dca047a192638c4585a530ccffbd9f5de74e12f870ace02464&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject',
        }}
        >
      </Image>
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
    backgroundColor: '#fff',
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
    width: 200,
    height: 50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

});