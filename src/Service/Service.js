import React from 'react'; 
import { Link } from 'react-router-dom';
import './Service.css'

function Service({service}) {
    const{_id,image,positionName,location,jobDescription,mustSkills,salaryRange}=service;
  return (
    <div className='service pb-3 bg-info' >
         <img src={image} alt='' width={70} height={60} paddingTop={10}></img>
        <h1 style={{fontSize:20,paddingTop:6}}>Job position:{positionName}</h1>
       
        <h4 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Job location is: {location}</h4>
        <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Your responsibilities: {jobDescription}</h5>
        <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Must required {mustSkills}</h5>
        <h3 style={{fontSize:24}}>Salary Range: ¥{salaryRange}</h3>
        <Link to={`/booking/${_id}`}>
        {/* <button className='btn btn-info'>Book {name.toLowerCase()}</button> */}
        
        </Link>
       
    </div>
  )
}

export default Service