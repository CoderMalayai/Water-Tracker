import React, { Component, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import './App.css';
import axios from "axios";

function App() {
  const [cups, setCups] = useState(0)
  useEffect(() => {
    async function getUser() {
      const response = await axios.get('/api/user')
      const user = response.data
      console.log(user)
      setCups(user.cups)
    }
    getUser()
  }, [])
  async function handleClick() {
    setCups(cups + 1)
    const response = await axios.post('/api/user', {
      name: "Malayai",
      cups: cups + 1
    })
    // setCups(cups + 1);
  }
  return (
    <>
      <div class="card text-center">
        <div class="card-header">
          Drink your Water
        </div>
        <div class="card-body">
          <h5 class="card-title">Water</h5>
          <p>Every 1 cup/8oz of water click button</p>
          <div>
            {cups}
          </div>
          <button className="btn btn-primary" onClick={handleClick}>CLICK ME</button>
        </div>
      </div>
    </>
  )
}

export default App