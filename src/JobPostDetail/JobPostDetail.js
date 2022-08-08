import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const JobPostDetail = () => {
    const { jobPostId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
      
        const url =`http://localhost:5000/jobPost/${jobPostId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setService(data));
    }, [])
    
    return (
        <div>
            <p>{service.length}</p>
            <h2>You Order: {service.conpanyName}</h2>
            <div className='text-center'>
                {/* <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                    <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
                </Link> */}
            </div>
        </div>
    );
};

export default JobPostDetail;