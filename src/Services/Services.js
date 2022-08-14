import React from 'react';
import {useEffect,useState} from 'react';
import Service from '../Service/Service';
import './Services.css';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

function Services() {
    const [services, setServices] = useState([]);

    //pagination 3 states
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
   
    useEffect(() => {
      fetch(`http://localhost:5000/jobs?page=${page}&size=${size}`)
      .then(res=>res.json())
      .then(data=>setServices(data));
    }, [page,size])
    

    useEffect(() => {
      fetch('http://localhost:5000/serviceCount')
      .then(res=>res.json())
      .then(data =>{
          const count = data.count;
          const pages = Math.ceil(count/4);
          setPageCount(pages);
      })
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
            key={service.id}
            service={service}
            ></Service>)
        }
 </div>

              {/* pagination */}

              <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number =><button
                        className={page === number ? 'selected' : ''}
                        onClick={()=>setPage(number)}
                        >{number + 1}</button>)
                    }
                    <select onChange={e=> setSize(e.target.value)}>
                        <option value ='5'>5</option>
                        <option value ='10' selected>10</option>
                        <option value ='15'>15</option>
                        <option value ='20'>20</option>
                    </select>
                </div>

                {/* pagination */}
        </div>
   
  )
}

export default Services;