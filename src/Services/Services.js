import React from 'react';
import {useEffect,useState} from 'react';
import Service from '../Service/Service';
import './Services.css';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/jobs/')
      .then(res=>res.json())
      .then(data=>setServices(data));
    }, [])
    
  return (
    <div id="services">
    
        <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
                {
                  services.length === 0 && <Spinner />
                }
        </div>
        <div  className='service-container'>
        {
            services.map(service =><Service
            key={service._id}
            service={service}
            ></Service>)
        }
        </div>
    </div>
  )
}

export default Services;