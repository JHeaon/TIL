import React, { useState } from 'react';

export default function App() {
    
  // const [value, setValue] = useState()
  const [message, setMessage] = useState("Invalid message")
  
  const inputHandler = (event) => {
      if (event.target.value.length < 3){
          setMessage("Invalid message")
      }
      else{
          setMessage("Valid message")
      }
  }
  
  return (
      <form>
          <label>Your message</label>
          <input type="text" onChange={inputHandler}/>
          <p>{message}</p>
      </form>
  );
}
