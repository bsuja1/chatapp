import React from 'react';
import { deleteMessage } from 'react-chat-engine';


const DeleteMessage = (props) => {


  const { chats, activeChat, userName, messages, creds } = props;
  var text = 'delete';
  console.log(text);
  //deleteMessage(creds, activeChat);
  deleteMessage(props);
  
  return (
  <div>
            <h1>delete msg</h1>
  </div>
  );
};

export default DeleteMessage;
