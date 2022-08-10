import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ServiceDetail = () => {
    
    const { serviceId } = useParams();
    const [service, setService] = useState("");
    useEffect(() => {
      
        const url =`http://localhost:5000/jobs/${serviceId}`;
        fetch(url)
        .then(res =>res.json())
       
        .then(data => setService(data));
    }, [])
    
    return (

        <div>
            <Header></Header>
        <div  style={{
        display:'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}>
           
            <img src={service.image} alt='' width={60} height={60} style={{marginTop:"10px",borderRadius:30}}></img>
            <h1 style={{fontSize:17}}>companyName:{service.companyName}</h1>
            <h1 style={{fontSize:15}}>Job position:{service.positionName}</h1>
       
            

        <h6 style={{fontSize:12,}}>languages Level:{service.languageLevel}</h6>
        <h5 style={{fontSize:12,}}>programming Languages:{service.programminglanguages}</h5>
        <h4 style={{fontSize:14}}>Job location is: {service.location}</h4>
        <h5 style={{fontSize:13}}>Your responsibilities: {service.jobDescription}</h5>
        <h5 style={{fontSize:13}}>Must required {service.mustSkills}</h5> 
         <h3 style={{fontSize:14}}>Salary Range(Yearly): ¥{service.salaryRange}</h3> 



         {/* <h6 style={{fontSize:12,paddingTop:6}}>languages Level:{languageLevel}</h6>
        <h5 style={{fontSize:12,paddingTop:6}}>programming Languages:{programminglanguages}</h5> */}
        {/* <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Your responsibilities: {jobDescription}</h5>
        <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>Must required {mustSkills}</h5> */}
        {/* <h3 style={{fontSize:14}}>Salary Range(Yearly): ¥{salaryRange}</h3> */} 





            <div className='text-center'> 
          <Link to="/login">
                    <button className='btn btn-primary'>Proceed to apply</button>
                    <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
                </Link> 
          </div>
        </div>

      <Footer></Footer>


        </div>
    );
};

export default ServiceDetail;