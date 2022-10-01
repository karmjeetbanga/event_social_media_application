import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { IconName } from "react-icons/fi";

export default function EventScreen({route}) {
    //const {eventName, hostName, eventDate, eventTime, eventLocation, eventImage} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
       <Image
        style={styles.Image}
        source={{
          uri: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T223352Z&X-Amz-Expires=86400&X-Amz-Signature=eb93e6df4195140324cf41b9ce862094eaf5bca31b10426f3dcd1ce98be3a8e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject',
        }}
        />
      </View>
      <View style={styles.headingtextView}>
      <Text style={styles.H1}>
        {route.params.eventName}
      </Text>
      </View>
        <View style={styles.subheadingtextView}>
        <Text style={styles.H2}>
            Hosted by: {route.params.hostName}
        </Text>
        </View>
        <View style={styles.bottomView}>
            <View style={styles.innerBottomView}>
         {/* <IconName name="FiCalendar" size={20} color="black" /> */}
            <Text style={styles.textStyle}> 
                {route.params.eventDate}
                {route.params.eventTime}
            </Text>
            <Text style={styles.textStyle}>
                {route.params.eventLocation}
            </Text>
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
    imageView: {
       width:'200%',
        height:'40%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    Image: {
    width: 400,
    height: 300,
    },
    headingtextView: {
        width:'100%',

        display:'flex',
        justifyContent:'left',
        alignItems:'left',
        marginTop: 20,
        marginLeft: 20,
    },
    H1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8456EC',
    },
    subheadingtextView: {
        width:'100%',
        display:'flex',
        justifyContent:'left',
        alignItems:'left',
        marginLeft: 20,
    },
    H2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    bottomView: {
        width:'100%',
        height:'20%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    innerBottomView: {
        width:'100%',
        height:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    

});