import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import EditMessage from './components/EditMessage';


const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<ChatEngine
              height="100vh"
              projectID="48f6eac8-adcc-4936-8ef0-79b75fa45024"
              userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')}
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}/>}/>
          <Route exact path="/Edit" element={<EditMessage/>}/>
          
        </Routes>
    </Router>
  );
}
/*
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
 
  return (
    <ChatEngine
      height="100vh"
      projectID="48f6eac8-adcc-4936-8ef0-79b75fa45024"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
*/
export default App;
