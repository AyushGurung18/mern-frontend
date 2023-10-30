import React, { useState } from "react";

function CollegeAdd() {
    const [formData , setFormData] = useState({
        name:'',
        location:'',
        progOffered:'',
        estYear:''
    });

    const handleChange = (e) => {
        e.preventDefault();
       setFormData({
        ...formData , 
        [e.target.name]: e.target.value,
       });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/api/auth/collegeAdd', {
                method:'POST', 
                headers:{
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
               if(response.ok){
                 console.log('college details sent successfully');
               }
               else{
                console.log('not fetched something wrong');
               }
        }catch(error){
               console.error('Error:' , error)
        }
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="name" name="name" placeholder="College Name" value={formData.name} onChange={handleChange} required></input>
            <input type="name" name="location" placeholder="College Location" value={formData.location} onChange={handleChange} required></input>
            <input type="name" name="progOffered" placeholder="Programs Offered" value={formData.progOffered} onChange={handleChange} required></input>
            <input type="name" name="estYear" placeholder="Year of establishment" value={formData.estYear} onChange={handleChange} required></input>
            <button type="submit">sumbit</button>
            </form>
        </div>
    )
}
export default CollegeAdd;