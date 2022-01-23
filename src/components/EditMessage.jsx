import React from 'react';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';


const EditMessage = (props) => {
  
    const [value, setValue] = useState('');
    const { chatId, creds } = props;
  
    const handleChange = (event) => {
      setValue(event.target.value);
  
      isTyping(props, chatId);
    };
    const handleSubmit = (event) => {
        //to prevent browser refresh
        event.preventDefault();
    
        const text = value.trim();
    
        if (text.length > 0) {
            //send to chat engine
          sendMessage(creds, chatId, { text });
        }
        //reset
        setValue('');
      };
    
    return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Edit..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="submit" name="button_reply">Edit Post</button>
    </form>
  );

  
};

export default EditMessage;
