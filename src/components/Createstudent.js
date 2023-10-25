import { useState } from "react";
import Studentform from "./Studentform"
import Axios from 'axios'
function Createstudent()
{
    const[arr,setArr]=useState([]);
    const getState =(childData)=>{
        setArr(childData);
    }
    const handleSubmit = ()=>{
        const data = {name:arr[0],email:arr[1],rollno:arr[2]};
        Axios.post("https://crud-backend-sesa.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else 
                Promise.reject();
         })
         .catch((err)=>alert(err));
        }
    return (
        <>
        <div class="container col-6 align-middle">
        <h1>Student Creation Page</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <Studentform getState={getState}/>
        </form>
        </>
    )
}
export default Createstudent;
