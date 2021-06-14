import React, { Component, useState } from 'react';
import { Text, View} from 'react-native';
import {Input,Button } from 'react-native-elements';
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAJPzIkyTspuuvcybuXMW02w2J2mgh44Uk",
    authDomain: "chatapp-14f77.firebaseapp.com",
    projectId: "chatapp-14f77",
    storageBucket: "chatapp-14f77.appspot.com",
    messagingSenderId: "522370658891",
    appId: "1:522370658891:web:98784e5f70599743c613ce"
  };

firebase.initializeApp(firebaseConfig);


function Login({navigation}) {
   
     const [username,setUsername]=useState('');
    return (
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
        <Input placeholder='Zadaj nick'
        label='Nickname'
        leftIcon={{type: 'material',name: 'tag'}}
        value={username}
        onChangeText={setUsername}
        />
       
        <Button title='Prihlasit' onPress={()=>{global.nick=username;navigation.navigate("Chat");}}/>
       
      </View>
    );
  }
  

export default Login;