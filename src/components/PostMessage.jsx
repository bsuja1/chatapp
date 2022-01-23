import React from 'react';

const PostMessage = ({ lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    
    return (
      <div className="message-row">     
            <div className="message" style={{ float: 'left', marginLeft: isFirstMessageByUser ? '1px' : '30px', backgroundColor: 'lightblue'}}>
              {message.sender.username}
            </div>   
            <div className="message" style={{ float: 'left', backgroundColor: 'lightgreen'}}>
              {message.text}
            </div>

      </div>
    );
  };
  
  export default PostMessage;