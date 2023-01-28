import React from 'react'; 
import {useNavigate } from 'react-router-dom';
import './Service.css'

function Service({service}) {
    const{_id,image,companyName,positionName,location,jobDescription,mustSkills,salaryRange,languageLevel,programminglanguages,name,userName}=service;

    const navigate = useNavigate();
    const navigateToServiceDetail= id =>{
      navigate(`/service/${id}`);
    }
  return (
    <div className='service-all' >
        <img src={image} alt='' width={60} height={60} style={{marginTop:"10px"}}></img>
        <h1 style={{fontSize:17,fontWeight:600}}>companyName:<span>{companyName}</span></h1>
        <h1 style={{fontSize:15}}>Job position:{positionName}</h1>

      <div style={{textAlign:"left"}}>
         <h6 className='description'>languages Level:{languageLevel}</h6>
         <h6 className='description'>Technology stack:{programminglanguages}</h6> 
         <h6 className='description'>Job location is: {location}</h6>
        {/* <h5 style={{fontSize:13}}>Your responsibilities: {jobDescription}</h5> */}
        <h6 className='description'>Salary Range(Yearly): ¥{salaryRange}</h6> 
      </div>
       

       
 <button onClick={()=> navigateToServiceDetail(_id)} className='btn btn-info mt-2'>Interested in {companyName}</button> 
        
       
    </div>
  )
}

export default Service