import React from 'react';

const PostMessage = ({ lastMessage, message, lMargin, btextcolor}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    //console.log(lMargin);
    
    return (
      <div className="message-row">     
            <div className="message" style={{ float: 'left', marginLeft: lMargin, backgroundColor: 'lightblue'}}>
              {message.sender.username}
            </div>   
            <div className="message" style={{ float: 'left', backgroundColor: btextcolor}}>
              {message.text}
            </div>

      </div>
    );
  };
  
  export default PostMessage;