import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, changeMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      changeMode('dark');
      document.body.style.backgroundColor = '#080831';
      setAlert({
        msg: "Dark Mode Enabaled",
        type: "success"
      });
      setTimeout(() => setAlert(null), 3000);
    } else {
      changeMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert({
        msg: "Light Mode Enabaled!",
        type: "success"
      });
      setTimeout(() => { setAlert(null) }, 3000);
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Edit Text" mode={mode} setAlert={setAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
