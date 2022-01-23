import React from 'react';

const ReplyMessage = ({ message}) => {
       
    return (
      <div className="message-row">     
            <div className="message" style={{ float: 'left', marginLeft: '20px' , backgroundColor: 'lightblue'}}>
              {message.sender.username}
            </div>   
            <div className="message" style={{ float: 'left', backgroundColor: 'lightgreen'}}>
              {message.text}
            </div>

      </div>
    );
  };
  
  export default ReplyMessage;