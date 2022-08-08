import React from 'react';
import { useState , useEffect } from 'react'
import './Footer.css';

function Footer() {
  const [date,setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});
  return (
    <div className='footer'>
       {/* <p> Time : {date.toLocaleTimeString()}</p> */}
       <p> Date : {date.toLocaleDateString()}</p>
       <p>Copyright &copy;tech-japan</p>
    </div>
  )
}

export default Footer