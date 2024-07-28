import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import {createBrowserRouter,RouterProvider,Route,Link,BrowserRouter,Routes,} from "react-router-dom";

function App() {

const[mode, setMode]  = useState("light");
const[alerts, setAlerts]  = useState(" ");

const showAlert=(type, message)=>{
  setAlerts({
    type: type,
    msg:  message
  })

  setTimeout(() => { 
    setAlerts(" ")}, 
    2500);
}


const toggleMode = () => {
  if(mode==="light"){
    setMode("secondary")
    document.body.style.backgroundColor ="#1b2855"
    document.body.style.color ="white"
    showAlert("success", "Dark Mode activated Successfully!")
    document.title= "Texify-Dark Mode enabled"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor ="white"
    document.body.style.color ="black";
    showAlert("success", "Light Mode activated Successfully!")
    document.title= "Texify-Light Mode enabled"
  }
}


  return(
    
 <div>
  <BrowserRouter>

<Navbar  title = "Textify" mode={mode}toggleMode= {toggleMode} home = "Home" about = "About us"/>

<Alert alert={alerts}/>

{/* <About    head1="About Our App" head2="Our Goal" head3= "Contact us" />  */}

<Routes>

<Route path="/about" element={<About head1="Contact us at 0323-33345454" head2="Our office is at Blue Area, Islamabad" head3="We offer Quality services."/>} />

<Route path="/textBox" element={<TestForm heading1 = "Enter text below:" showAlert={showAlert} mode={mode}/>} />

</Routes>

  </BrowserRouter>
 {/* <div className='container my-5'>
</div>  */}
 </div>
)};

export default App;
