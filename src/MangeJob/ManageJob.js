import React from 'react';
import { useEffect,useState } from 'react';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

function ManageJob() {
      const [services, setServices] = useState([]);
      useEffect(() => {
         fetch ('https://tech-japan-express.herokuapp.com/jobs')
         .then(res => res.json())
         .then(data => setServices(data));
      }, [])

      const handleDelete = id =>{
                              const url = `https://tech-japan-express.herokuapp.com/manageJob/${id}`;
                              fetch(url, {method:'DELETE'})
                              .then(res=>res.json())
                              .then(data=>{
                                   console.log(data);
                                   if(data.deletedCount){
                                       alert('data is deleted');
                                       const remaining = services.filter(service => service._id !== id);
                                       setServices(remaining);
                                   }
                              })
      }
      
  return (
    <div style={{textAlign:'center'}}>
         <h1>ManageServices</h1>
         <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}>
                {
                  services.length === 0 && <Spinner />
                }
        </div>
         <h3>Total job posts: {services.length}</h3>
         {
                              services.map(service => <div style={{borderTop:"2px solid orange",paddingTop:'10px',paddingBottom:'10px'}}
                                        key={service._id}>
                                        <h4>{service.positionName}</h4>
                                        <h4>{service.companyName}</h4>
                                         <button className='btn btn-info mt-2' onClick={()=>handleDelete(service._id)}>delete</button>
                              </div>)
         }
    </div>
  )
}

export default ManageJob;