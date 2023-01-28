import React from 'react'; 
import {useNavigate } from 'react-router-dom';
import './Blogs.css'

function Blogs({service}) {
    const{_id,image,companyName,positionName,location,developerName,myJourney,postBlogDate}=service;

    const navigate = useNavigate();
//     const navigateToServiceDetail= id =>{
//       navigate(`/blogs/${id}`);
//     }
  return (
    <div className='blogs-all' >

    
        <img src={image} alt='' width={90} height={90} style={{marginTop:"10px",borderRadius:"20px"}}></img>
        <h1 className='titleText'>Developer Name:<span>{developerName}</span></h1>
        <h1 className='titleTextMiddle'>Company Name:<span>{companyName}</span></h1>
        <h1 className='titleTextBottom'>Position Name:{positionName}</h1>
       
            

      
        <h4 className='anotherText'>Job location is: {location}</h4>
        <h4 className='anotherText'>My Journey of getting my dream job :</h4> 
        <h4 className='descriptionText'>{myJourney}</h4>
        {/* <h5 style={{fontSize:13}}>Your responsibilities: {jobDescription}</h5> */}
        <h4 className='lastText'>Blog is posted: {postBlogDate}</h4> 

       

       
         {/* <button onClick={()=> navigateToServiceDetail(_id)} className='btn btn-info mt-2'>Want to know more of his {companyName} journey!!</button> 
         */}
       
    </div>
  )
}

export default Blogs