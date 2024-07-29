import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './lottery'
import { sum } from './generateTicket'

function App() {
  let winCond = (ticket)=>{
    return sum(ticket)===15;
    //return ticket.every((num)=>num===ticket[0]);
  }
  return (
    <>
    <Lottery n={3} winningSum={winCond} ></Lottery>
    </>
  )
}

export default App
