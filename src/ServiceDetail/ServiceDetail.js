import React from 'react';
import './ServiceDetail.css';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AnotherBox from '../AnotherBox/AnotherBox';
import Footer from '../Footer/Footer';

const ServiceDetail = () => {
    
    const { serviceId } = useParams();
    const [service, setService] = useState("");
    useEffect(() => {
      
        const url =`https://tech-japan-production.up.railway.app/jobs/${serviceId}`;
        fetch(url)
        .then(res =>res.json())
       
        .then(data => setService(data));
    }, [])
    
    return (



<div className='service-detail'>
   <div className='service-left'>
           
        <img src={service.image} alt='' width={70} height={70} style={{marginTop:"10px",borderRadius:30}}></img>
        <h1 className='topText'>Company Name: {service.companyName}</h1>
        <h1 className='positionText'>Job position: {service.positionName}</h1>
      
           

       <h5 className='descriptionText'>languages Level:{service.languageLevel}</h5>
       <h5 className='descriptionText'>programming Languages:{service.programminglanguages}</h5>
       <h5 className='descriptionText'>Job location : {service.location}</h5>
       <h5 className='descriptionText'>Your responsibilities: {service.jobDescription}</h5>
       <h5 className='descriptionText'>Must required {service.mustSkills}</h5> 
       <h5 className='descriptionText'>Salary Range(Yearly): ¥{service.salaryRange}</h5> 



        {/* <h6 style={{fontSize:12,paddingTop:6}}>languages Level:{languageLevel}</h6>
       <h5 style={{fontSize:12,paddingTop:6}}>programming Languages:{programminglanguages}</h5> */}
       {/* <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Your responsibilities: {jobDescription}</h5>
       <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Must required {mustSkills}</h5> */}
       {/* <h3 style={{fontSize:14}}>Salary Range(Yearly): ¥{salaryRange}</h3> */} 





            <div className='text-center'> 
                <Link to="/login">
                    <button  style={{marginBottom:"20px"}} className='btn btn-primary'>Proceed to apply</button>
                    <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
                </Link> 
            </div>
    </div>


            <div style={{width:'30%'}}>

                <AnotherBox></AnotherBox>
            </div>
  </div>
    );
};

export default ServiceDetail;