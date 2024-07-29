import './TicketNum'
import './Ticket.css'
import TicketNum from './TicketNum';
export default function Ticket({arr})
{
    return(
        <div className='ticket'>
            {
                arr.map((num,idx)=>(
                    <TicketNum key={idx} num={num}/>
                ))
            }
        </div>
    );
}