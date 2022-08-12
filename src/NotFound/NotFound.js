import React from 'react';
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div style={{textAlign:'center'}}>
        <div>
          <img style={{height:520}}src="https://img.freepik.com/free-vector/404-error-lost-in-space-concept-illustration_114360-7891.jpg?t=st=1649256965~exp=1649257565~hmac=7d6e4e8c120213811b302183ab7055890153dbee429f68585e5f5c140de1bfb1&w=740"></img>
        </div>
        
        <Link to='/'><button>Go Back to Home</button></Link>
    </div>
  )
}

export default NotFound