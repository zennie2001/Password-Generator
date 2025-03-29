import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function App() {


  let[uppercase, setUppercase]=useState(false)
  let[lowercase, setLowercase]=useState(false)
  let[numbers, setNumbers]=useState(false)
  let[symbols, setSymbols]=useState(false)
  let[passwordLen, setPasswordLen]=useState(8)
  let[fpass, setPass]=useState('')

  let createPassword=()=>{
    let finalPass=""
    let charSet=''
   if(uppercase || lowercase || numbers || symbols){
    if(uppercase) charSet+=UC;
    if(lowercase) charSet+=LC;
    if(numbers) charSet+=NC;
    if(symbols) charSet+=SC;
    for(let i=0; i<passwordLen; i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
    }
    setPass(finalPass)
    

   }else{
    toast.error("please select one checkbox...")
   }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
    toast.success("Copied to clipboard")
  }

  return (
    <>
    <ToastContainer/>
    <div className='passwordBox'>
      <h1>Password Generator</h1>

      <div className='passwordBoxin'>
        <input type='text' readOnly value={fpass}/> <button onClick={copyPass} >Copy</button>
      </div>
      <div className='passLength'>
        <label>Password Length</label>
        <input type='number' max={20} min={8} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)}/>

      </div>

      <div className='passLength'>
        <label>Include Uppercase letters</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>

      <div className='passLength'>
        <label>Include Lowercase letters</label>
        <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className='passLength'>
        <label>Include Numbers</label>
        <input type='checkbox' checked={numbers} onChange={()=>setNumbers(!numbers)}/>
        </div>

        <div className='passLength'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
        </div>

        <button className='btn' onClick={createPassword}>
          Generate Password
          </button>



    </div>
    
    
    </>
   
  );
}

export default App;
