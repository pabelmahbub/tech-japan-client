import React from 'react';
import { useEffect,useState } from 'react';

function ManageJob() {
      const [services, setServices] = useState([]);
      useEffect(() => {
         fetch ('https://tech-japan-express.herokuapp.com/jobs')
         .then(res => res.json())
         .then(data => setServices(data));
      }, [])

      const handleDelete = id =>{
                              const url = `https://tech-japan-express.herokuapp.com/mangeJob/${id}`;
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
         <h3>Total job posts: {services.length}</h3>
         {
                              services.map(service => <div key={service._id}>
                                        <h4>{service.positionName}</h4>
                                        <h4>{service.companyName}</h4>
                                         <button className='btn btn-info mt-2' onClick={()=>handleDelete(service._id)}>delete</button>
                              </div>)
         }
    </div>
  )
}

export default ManageJob;