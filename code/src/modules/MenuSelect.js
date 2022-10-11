
import React from 'react'
import {Link} from 'react-router-dom'


function menuSelect()
{

    return(
         <div>
            <ul>
                    
                <Link to= 'nighcity-news' style={{textDecoration:'none'}}> <li>Nigh City News </li></Link> 
                <Link to= '/' style={{textDecoration:'none'}}>  <li>Your Page</li> </Link>
                <Link to='most-dependable-people' style={{textDecoration:'none'}}>   <li>Best Around </li></Link>
                <Link to='conversation-log' style={{textDecoration:'none'}} ><li>Past Convos</li> </Link>
                <Link to='best-hackers' style={{textDecoration:'none'}}>  <li>NetRunners</li> </Link>
                
            </ul>
        </div>
        )
}

export default menuSelect