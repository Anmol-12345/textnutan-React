import './App.css';
import React,{useState} from 'react';
import Navbar from './component/Navbar';
//import About from './component/About';
import Textform from './component/Textform';
import Alert from './component/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert,setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }

  //state variable ko use karne ke liye setMode() ka use karte hai.
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
      document.title = 'Textnutan - Dark Mode';
      setInterval(()=>{
        document.title = 'Anmol Gupta You Will be Crak Amazon Please Try!';
      },2000);

       setInterval(()=>{
        document.title = 'Anmol Gupta You can Change Your Life!';
      },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = 'Textnutan - Light Mode';
    } 
  }
  //wheather dark mode is enabled or not
  return (
   <>
   {/* this is props */}
   {/* <Navbar/> */}
{/* <Navbar title = "textnutan 2" about_Text="About us"/> */}
{/* <Router> */}
<Navbar title = "textnutan 2" mode ={mode} toggleMode = {toggleMode}/>

<Alert alert = {alert}/>
<div className="container my-3">
   {/* <Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element=
  { */}
    <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
  {/* } />
</Routes> */}
</div>
{/* </Router> */}

  {/* <About/> */}
  </>
  );  
}
 
export default App;
