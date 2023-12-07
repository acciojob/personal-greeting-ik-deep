
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [text, settext] = useState("")
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
       <input type="text" id="name" onChange={e=>settext(e.target.value)}></input>
       <p>{text}</p>
    </div>
    
  )
}

export default App
 