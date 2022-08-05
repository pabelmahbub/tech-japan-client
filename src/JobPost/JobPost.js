import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./JobPost.css";

function JobPost() {
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('http://localhost:5000/addJob', data)
                     .then(res=>{
                              console.log(res);
                              if(res.data.insertedId){
                                alert('data added successfully');
                                reset();
                              }
                     })
};

  return (
   <div className='add-service'>
         <h1>Add your services here.</h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("postitionName", { required: true, maxLength: 20 })} placeholder='Position Name'/>
      <input {...register("location", { required: true, maxLength: 20 })} placeholder='location'/>
      <textarea {...register("jobDescription")} placeholder='Job Description'/>
      <textarea {...register("mustSkills")} placeholder='Must have these skills'/>
      <input type="salaryRange" {...register("salaryRange")} placeholder='Salary range'/>
      <input {...register("image")} placeholder='Img URL'/>
      <input type="submit" />
    </form>
    </div>
  )
}

export default JobPost