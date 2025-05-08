import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
    
  Route,
  
  Routes,
}from "react-router-dom";import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutus="AboutUs" />
        <Alert alert={alert} />
        <div className="container my-2">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
