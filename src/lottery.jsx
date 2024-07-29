import { useState } from "react"
import './lottery.css'
import './generateTicket'
import  {generate,sum} from "./generateTicket";
import './TicketNum'
import './Ticket';
import Ticket from "./Ticket";

export default function Lottery({n,winningSum}){
    let [ticket,setTicket] = useState(generate(n));
    let newTicket = ()=>{
        setTicket(generate(n));
    }
    let isWinning = winningSum(ticket);
    return(
        <>
        <h2>Lottery Game!!</h2>
        <Ticket arr={ticket}/>
        <button onClick={newTicket}>Get new Ticket</button>
        <h2>{isWinning && "You won, congratulations !!!"}</h2>
        </>
    );
}