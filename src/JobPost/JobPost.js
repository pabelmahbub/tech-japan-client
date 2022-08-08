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
         <h1 style={{fontSize:22,paddingTop:26,color:"#137373"}}>Job posting is here</h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("companyName", { required: true, maxLength: 20 })} placeholder='Company Name *(or psuedo name)'/>
      <input {...register("positionName", { required: true, maxLength: 20 })} placeholder='Position Name *'/>
      <input {...register("location", { required: true, maxLength: 20 })} placeholder='location *'/>
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