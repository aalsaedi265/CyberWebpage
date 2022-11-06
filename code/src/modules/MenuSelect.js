
import React from 'react'
import {Link} from 'react-router-dom'


function menuSelect()
{

    return(
         <div>
            <ul>
                    
                <Link to= 'nighcity_news' style={{textDecoration:'none'}}> <li>Tech News</li></Link> 
                <Link to= 'personal_page' style={{textDecoration:'none'}}>  <li>Your Page</li> </Link>
                <Link to='most_dependable_people' style={{textDecoration:'none'}}>   <li>Best Around </li></Link>
                <Link to='conversation_log' style={{textDecoration:'none'}} ><li>Past Convos</li> </Link>
                <Link to='best_hackers' style={{textDecoration:'none'}}>  <li>NetRunners</li> </Link>
                <Link to= "/" style={{textDecoration:'none'}}><li>Genesis</li></Link>
                
            </ul>
        </div>
        )
}

export default menuSelect