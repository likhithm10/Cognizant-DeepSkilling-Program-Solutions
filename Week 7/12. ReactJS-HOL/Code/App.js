import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greetings from './Greetings';
import Login from './Login';
import Logout from './Logout';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Greetings isLoggedIn={isLoggedIn} />
    
       {isLoggedIn ? (
        <Logout onClick={handleLogout} />
      ) : (
        <Login onClick={handleLogin} />
      )}
  
    </div>
  );
}

export default App;
