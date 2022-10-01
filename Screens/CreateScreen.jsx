import React from 'react';
import { Text, TextInput, TouchableOpacity, View , StyleSheet } from 'react-native';

export default function CreateScreen( {navigation} ) {

    const [eventName, setEventName] = React.useState('Birthday Party');
    const [hostName, setHostName] = React.useState('Karmjeet Kaur');
    const [eventDate, setEventDate] = React.useState(' 10/10/2021');
    const [eventTime, setEventTime] = React.useState('  10:00 AM');
    const [eventLocation, setEventLocation] = React.useState('  1234 Main St, San Francisco, CA 94122');
    const [eventImage, setEventImage] = React.useState('    ');
  function  goToEventScreen(){
        
         navigation.navigate('Event', {eventName, hostName, eventDate, eventTime, eventLocation, eventImage});
    }
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.H1}>Enter The Details:</Text> 
      <View style={styles.inputTextContainer}>
        <TextInput 
          style={styles.inputText} 
         onChangeText={setEventName}
          value={eventName} 
           placeholder='Event Name*' />
        <TextInput 
          style={styles.inputText} 
          onChangeText={setHostName}
          value={hostName} 
           placeholder='Host Name*' />
        <TextInput 
            style={styles.inputText} 
           onChangeText={setEventDate}
            value={eventDate} 
            placeholder='Event Date*' />
        <TextInput 
            style={styles.inputText}
            onChangeText={setEventTime}
           value={eventTime}
            placeholder='Event Time*' />
        <TextInput 
            style={styles.inputText} 
           onChangeText={setEventLocation}
            value={eventLocation}
            placeholder='Event Location*' />
        <TextInput 
            style={styles.inputText}
           onChangeText={setEventImage}
            value={eventImage}
            placeholder='Event Image*' />
        </View>
       <TouchableOpacity 
       style={styles.button}
       onPress={()=> goToEventScreen()}>
         <Text style={styles.buttonText}>Create Event</Text>
       </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',

  },
  H1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    },
    inputTextContainer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
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
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});