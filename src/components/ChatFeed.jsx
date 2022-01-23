import React from 'react';
import { ChatEngine, deleteMessage, editMessage } from 'react-chat-engine';
//import {Link} from 'react-router-dom';

import MessageForm from './MessageForm';

import PostMessage from './PostMessage';
//import EditMessage from './EditMessage';
//import ReplyMessage from './ReplyMessage';
//import DeleteMessage from './DeleteMessage';
import { sendMessage, isTyping } from 'react-chat-engine';


const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages, messageId,creds, chatId } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      var lastMessage=messages[lastMessageKey];
      const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    

      const editmsg=()=>{
        var text="edit"
        console.log(text)
        editMessage(props);
      }

      const deletemsg=()=>{
        var text="delete"
        console.log(text)
        deleteMessage(creds,activeChat);
      }

      const replymsg=()=>{
        var text="reply"
        console.log(text)
        //sendMessage(creds, activeChat, { text });
        //ReplyMessage(props);
      }
      
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage?
            <div>
              < PostMessage message={message} lastMessage={messages[lastMessageKey]} lMargin='1px' btextcolor='lightgreen'/>
              <div className="buttons" style={{ float: 'left',marginLeft: '20px'}}>
                <button onClick={editmsg} name="button_edit">Edit</button>
                <button onClick={deletemsg} name="button_delete">Delete</button>
                <button onClick={replymsg} name="button_reply">Reply</button>
              </div>
            </div>
            :  
            <div>
              < PostMessage message={message} lastMessage={messages[lastMessageKey]} lMargin='30px' btextcolor='lightyellow'/>
              <div className="buttons" style={{ float: 'left',marginLeft:'50px'}}>
                <button onClick={replymsg} name="button_reply">Reply</button>
              </div>
            </div>
            }
          </div>
        </div>
      );
    });
  };
  /* 
  <Link to = '/Edit'>Edit   </Link>
  <Link to = '/Delete'>Delete   </Link>
  <Link to = '/Reply'>Reply   </Link>

  button onClick={<div><DeleteMessage props={props}/></div>} 
                        name="button_delete">Delete</button>
       */
  
  const onLogout = () => {
    console.log("OnLogout")
    localStorage.setItem('username', "");
    localStorage.setItem('password', "");
    window.location.reload()
  } 
  
  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
          <div>
            <button onClick={onLogout} name="button_logout">Logout</button>
          </div>
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
    </div>
  );
};

export default ChatFeed;
