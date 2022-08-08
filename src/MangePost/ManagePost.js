import React from 'react';
import { useEffect,useState } from 'react';

function ManagePost() {
      const [services, setServices] = useState([]);
      useEffect(() => {
         fetch ('http://localhost:5000/jobs')
         .then(res => res.json())
         .then(data => setServices(data));
      }, [])

      const handleDelete = id =>{
                              const url = `http://localhost:5000/managePost/${id}`;
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
    <div>
         <h1>ManageServices</h1>
         {services.length}
         {
                              services.map(service => <div key={service._id}>
                                        <h4>{service.positionName}</h4>
                                        <h4>{service.companyName}</h4>
                                         <button onClick={()=>handleDelete(service._id)}>delete</button>
                              </div>)
         }
    </div>
  )
}

export default ManagePost