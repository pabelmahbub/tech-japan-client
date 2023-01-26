import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import {useEffect,useState} from 'react';
import Blogs from '../Blogs/Blogs';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import MyNavbar from '../MyNavbar/MyNavbar';
import './DeveloperBlog.css';
import useFirebase from '../hooks/useFirebase';

function DeveloperBlog() {
      const{user}=useFirebase()
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('https://tech-japan-production.up.railway.app/addBlog', data)
                     .then(res=>{
                              console.log(res);
                              if(res.data.insertedId){
                                alert('data added successfully');
                                reset();
                              }
                     })
};

const [jobBlogs, setJobBlogs] = useState([]);
useEffect(() => {
  fetch('https://tech-japan-production.up.railway.app/postBlog')
  .then(res=>res.json())
  .then(data=>setJobBlogs(data));
}, [])


  return (
  <>
   <div className='add-service'>
         <h1 style={{fontSize:20,fontWeight:400,paddingTop:26,color:"salmon",textAlign:'center'}}>Hello~ {user ? user.displayName :''}<br/>write a Blog of how you got your dream job!</h1>
        
       
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("image")} placeholder='Img URL'/>
      <input {...register("developerName", { required: true, maxLength: 20 })} placeholder='Developer Name'/>
      <input {...register("companyName", { required: true, maxLength: 20 })} placeholder='Company Name'/>
      <input {...register("positionName", { required: true, maxLength: 20 })} placeholder='Position Name *'/>
      <input {...register("location", { required: true, maxLength: 40 })} placeholder='location *'/>
      <textarea {...register("myJourney")} placeholder='My journey to get a job'/>
      <input {...register("postBlogDate", { required: true, maxLength: 70 })} placeholder="Blog Post Date *"/>
     
      <input type="submit" />
    </form>
    </div>


    <div id="dev-blog">

    <h4 style={{textAlign:'center',paddingTop:"30px"}}> Developer's story of succesfully getting a job from Tech-Japan</h4>
    <h5 style={{paddingLeft:'30px',paddingRight:'30px',paddingTop:'26px',textAlign:'center'}}>Hired in famous companies.</h5>
    <h1 style={{textAlign:'center',paddingTop:"60px",paddingBottom:"40px",textDecorationLine:'underline',fontweight:400,fontSize:28,color:'goldenrod'}}>Blog: Our Journey as a Developer.</h1>
    
    <div>
            {
              jobBlogs.length === 0 && <Spinner />
            }
    </div>
    <div  className='devBlog-container'>
                             
    {
        jobBlogs.map(service =><Blogs
        key={service.id}
        service={service}
        ></Blogs>)
    }
  
    </div>
   
</div>

    </>
  )
}

export default DeveloperBlog