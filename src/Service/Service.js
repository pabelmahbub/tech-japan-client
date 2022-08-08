import React from 'react'; 
import { Link } from 'react-router-dom';
import './Service.css'

function Service({service}) {
    const{_id,image,companyName,positionName,location,jobDescription,mustSkills,salaryRange,languageLevel,programminglanguages}=service;
  return (
    <div className='service pb-3' >

       
            <img src={image} alt='' width={60} height={60} style={{marginTop:"10px",borderRadius:30}}></img>
            <h1 style={{fontSize:17,paddingTop:'10px'}}>companyName:{companyName}</h1>
            <h1 style={{fontSize:15,paddingTop:'10px'}}>Job position:{positionName}</h1>
       
            

        <h6 style={{fontSize:12,paddingTop:6}}>languages Level:{languageLevel}</h6>
        <h5 style={{fontSize:12,paddingTop:6}}>programming Languages:{programminglanguages}</h5>
        <h4 style={{paddingRight:10,paddingLeft:10,fontSize:14}}>Job location is: {location}</h4>
        {/* <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Your responsibilities: {jobDescription}</h5>
        <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Must required {mustSkills}</h5> */}
        <h3 style={{fontSize:14}}>Salary Range(Yearly): ¥{salaryRange}</h3>

       

        <Link to={`/jobPost/${_id}`}>
 <button className='btn btn-info'>more of {companyName.toLowerCase()}</button> 
        
        </Link>
       
    </div>
  )
}

export default Service