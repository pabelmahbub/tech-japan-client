import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import {useEffect,useState} from 'react';
import Blogs from '../Blogs/Blogs';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import MyNavbar from '../MyNavbar/MyNavbar';

function DeveloperBlog() {
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('http://localhost:5000/addBlog', data)
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
  fetch('http://localhost:5000/postBlog')
  .then(res=>res.json())
  .then(data=>setJobBlogs(data));
}, [])


  return (
  <>
  <MyNavbar></MyNavbar>
   <div className='add-service'>
         <h1 style={{fontSize:24,fontWeight:800,paddingTop:26,color:"salmon",textAlign:'center'}}>Want to write a Blog of how you get your dream job?</h1>
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
    
    <div style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}>
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