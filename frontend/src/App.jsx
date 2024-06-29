import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import './App.css'

function App() {
  const [cups, setCups] = useState(0)

  function handleClick() {
    setCups(cups + 1);
  }
  return (
    <>
      <div>
        {cups}
      </div>
      <button className="btn btn-primary" onClick={handleClick}>I drank water</button>
    </>
  )
}

export default App
