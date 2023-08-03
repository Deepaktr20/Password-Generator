import { useState } from "react";
import "./App.css";
import Copy from "./copy.png";
import copy from "copy-to-clipboard";
import { UppercaseLetters,LowercaseLetters,Numbers,Symbols } from "./Data";

function App(){
    const[passwordLength,setPasswordLength]=useState(10);
    const[uppercase,setUppercase]=useState(false);
    const[lowercase,setLowercase]=useState(false);
    const[numbers,setNumbers]=useState(false);
    const[symbols,setSymbols]=useState(false);
    const[password,setPassword]=useState('');
    

    const handleGeneratePassword=()=>{
        let characterlist="";
        if(uppercase){
            characterlist=characterlist+UppercaseLetters
        }
        if(lowercase){
            characterlist=characterlist+LowercaseLetters
        }
        if(numbers){
            characterlist=characterlist+Numbers
        }
        if(symbols){
            characterlist=characterlist+Symbols
        }
        setPassword(createPassword(characterlist))
    }
    const createPassword=(characterlist)=>{
        let password="";
        const characterlistLength=characterlist.length;
        for(let i=0;i<passwordLength;i++){
           const characterlistIndex=Math.round(Math.random()*characterlistLength);
           password=password+characterlist.charAt(characterlistIndex)
        }
        return password;
    }
    const CopyPassword=()=>{
        copy(password);
        alert("Password copied sucessfully")
    }
    return(
        <div className="App">
            <div className="container">
                <div className="generator">
                    <h2 style={{color:"white"}}>Password Generator</h2>
                    <div className="generator_password">
                        <h3>{password}</h3>
                        <button onClick={CopyPassword} className="copy_btn"><img src={Copy} alt=""></img></button>
                    </div>
                    <div className="form_group">
                        <label>Password Length</label>
                        <input type="number" min={10} max={20} value={passwordLength} onChange={e=>setPasswordLength(e.target.value)}/>
                    </div>
                    <div className="form_group">
                        <label>Include Uppercase letters</label>
                        <input type="checkbox" checked={uppercase} onChange={e=>setUppercase(e.target.checked)}/>
                    </div>
                    <div className="form_group">
                        <label>Include Lowercase letters</label>
                        <input type="checkbox" checked={lowercase} onChange={e=>setLowercase(e.target.checked)}/>
                    </div>
                    <div className="form_group">
                        <label>Include Numbers </label>
                        <input type="checkbox" checked={numbers} onChange={e=>setNumbers(e.target.checked)}/>
                    </div>
                    <div className="form_group">
                        <label>Include Symbols</label>
                        <input type="checkbox" checked={symbols} onChange={e=>setSymbols(e.target.checked)}/>
                    </div>
                    <button onClick={handleGeneratePassword} className="generator_btn">Generate Password</button>
                </div>
            </div>
        </div>
    )
}
export default App;