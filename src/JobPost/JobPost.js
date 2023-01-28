import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./JobPost.css";

function JobPost() {
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('https://tech-japan-production.up.railway.app/addJob', data)
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
      <h1 className='titleStyle'>Want to hire? Write the job Post here.</h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("companyName", { required: true, maxLength: 20 })} placeholder='Company Name *(or psuedo name)'/>
      <input {...register("positionName", { required: true, maxLength: 20 })} placeholder='Position Name *'/>
      <input {...register("location", { required: true, maxLength: 40 })} placeholder='location *'/>
      <input {...register("languageLevel", { required: true, maxLength: 40 })} placeholder='Language Level *'/>
      <input {...register("programminglanguages", { required: true, maxLength: 70 })} placeholder="programming Languages *"/>
      <textarea {...register("jobDescription")} placeholder='Job Description'/>
      <textarea {...register("mustSkills")} placeholder='Must have these skills'/>
      <input type="salaryRange" {...register("salaryRange",{ required: true, maxLength:20 })} placeholder='Salary range(yearly) *'/>
      <input {...register("image")} placeholder='Img URL'/>
      <input type="submit" />
    </form>
    </div>
  )
}

export default JobPost