import React from 'react'; 
import {useNavigate } from 'react-router-dom';
import './Blogs.css'

function Blogs({service}) {
    const{_id,image,companyName,positionName,location,developerName,myJourney,postBlogDate}=service;

    const navigate = useNavigate();
    const navigateToServiceDetail= id =>{
      navigate(`/service/${id}`);
    }
  return (
    <div className='blogs-all' >

       
            <img src={image} alt='' width={150} height={150} style={{marginTop:"10px",borderRadius:"750px"}}></img>
            <h1 style={{fontSize:22,color:"salmon",fontWeight:600,paddingTop:"10px"}}>Developer Name:<span>{developerName}</span></h1>
            <h1 style={{fontSize:19,fontWeight:600,paddingTop:"10px"}}>Company Name:<span>{companyName}</span></h1>
            <h1 style={{fontSize:18,fontWeight:600,paddingTop:"10px"}}>Position Name:{positionName}</h1>
       
            

      
        <h4 style={{fontSize:16,paddingTop:"10px"}}>Job location is: {location}</h4>
        <h5 style={{fontSize:14,paddingTop:"10px"}}>My Journey of getting my dream job :{myJourney}</h5> 
        {/* <h5 style={{fontSize:13}}>Your responsibilities: {jobDescription}</h5> */}
        <h3 style={{fontSize:14,paddingTop:"10px"}}>Blog is posted: {postBlogDate}</h3> 

       

       
 <button onClick={()=> navigateToServiceDetail(_id)} className='btn btn-info mt-2'>Want to know more of his {companyName} journey!!</button> 
        
       
    </div>
  )
}

export default Blogs