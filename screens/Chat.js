import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import 'firebase/firestore';
import firebase from 'firebase/app'
import SlackMessage from '../SlackMessage'
  function Chat() {
    const [messages, setMessages] = useState([]);
    const app=firebase.app();
    const db=app.firestore();
    
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const{
        _id,
        createdAt,
        user,
        text

      }=messages[0];
      db.collection('chats').add({ 
        _id,
        createdAt,
        user,
        text});
    }, [])
    useLayoutEffect(() => {
      const unsubscribe = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(snapshot => setMessages(
      snapshot.docs.map(doc => ({
      _id: doc.data()._id,
      createdAt: doc.data().createdAt.toDate(),
      text: doc.data().text,
      user: doc.data().user,
      }))
      ));
      return unsubscribe;
      }, [])
      const renderSlack=(props)=> {
        
        return <SlackMessage {...props}/>
      }
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        showAvatarForEveryMessage={true}
        user={{
          _id: global.nick,
          name:global.nick,
        }}
        renderMessage={renderSlack}
      />
    )
  }
  export default Chat;