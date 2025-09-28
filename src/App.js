import './App.css';
import React,{useState} from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Textform from './component/Textform';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')

  }

  //state variable ko use karne ke liye setMode() ka use karte hai.
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
      //document.title = 'Textnutan - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'Anmol Gupta You Will be Crak Amazon Please Try!';
      // },2000);

      //  setInterval(()=>{
      //   document.title = 'Anmol Gupta You can Change Your Life!';
      // },1500);
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      //document.title = 'Textnutan - Light Mode';
    } 
  }
  //wheather dark mode is enabled or not
  return (
   <>
   {/* this is props */}
   {/* <Navbar/> */}
{/* <Navbar title = "textnutan 2" about_Text="About us"/> */}
<Router>
<Navbar title = "textnutan 2" about_Text = "About Us" mode ={mode} toggleMode = {toggleMode}/>

<Alert alert = {alert}/>
<div className="container my-3">
   <Routes>
  <Route exact path="/about" element={  <About mode = {mode}/>}/>

  <Route exact path="/"
  element={<Textform showAlert={showAlert} heading="Try Textnutan - Word Counter, Character Counter, Remove extra Spaces " mode={mode} />}/>
  </Routes>
</div>
</Router>

  {/* <About/> */}
  </>
  );  
}
 
export default App;
