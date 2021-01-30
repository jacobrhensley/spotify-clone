import React, { useEffect } from "react";
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

function App() {

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const token = hash.access_token;
  }, [])
  return (
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
