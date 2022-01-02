import React, {useState} from 'react';
import {LogBox} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../../Fire';

function ChatScreen(props){
  const [state, setState] = useState({username: ''});

  React.useEffect(() => {
    LogBox.ignoreAllLogs();
    Fire.get((message) =>
      setState((previous) => ({
        ...state,
        messages: GiftedChat.append(previous.messages, message),
      })),
    );

    return () => {
        Fire.off();
    };
  }, []);
  const getUser = () => {
    return {
      _id: Fire.uid,
      name: props.route.params.username,
    };
  };
  const userData = getUser();

  const chat = (
    <GiftedChat messages={state.messages} onSend={Fire.send} user={userData} />
  );
  return chat;
};

export default ChatScreen;
