import { useState } from 'react';
import axios from 'axios';

const projectID = '48f6eac8-adcc-4936-8ef0-79b75fa45024';
const privateKey = '94762906-70b5-4dcb-8825-871356faf319';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password, 'Private-Key': privateKey };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };
  
  
  const signup = async (e) => {

  try{
    const authObject = { 'Project-ID': projectID, 'Private-Key': privateKey };
    await axios.post('https://api.chatengine.io/users/',
                { 'username': username, 'secret': password},
                { 'headers': authObject}
                );      
    // login the user
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    window.location.reload()
  } catch(e){
    setError('Oops, Could not Sign Up');
    }
  };


  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span> 
            </button>
          </div>
        </form>
        <div align="center">
          <button onClick={signup} name="button_signup">Sign Up</button>
        </div>
        <h1 className='error'>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;
