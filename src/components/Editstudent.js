import { useParams } from "react-router-dom";
import StudentForm from "./Studentform";
import Axios from "axios";
import { useEffect, useState } from "react";

function EditStudent()
{
    const {id} =  useParams();
    const [NewData,setNewData]=useState([]);

    const [data,setData] = useState({name:"",email:"",rollno:""});
    useEffect(()=>{
        Axios.get("https://crud-backend-sesa.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email, rollno} = res.data;
                setData({name,email,rollno});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[id]);

    const getState=(childData)=>{
        setNewData(childData);
    }
    const handlesubmit=()=>{
        const data={name:NewData[0],email:NewData[1],rollno:NewData[2]}
        Axios.put("https://crud-backend-sesa.onrender.com/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status===200)
                alert("Record updated!!!!")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return (
        <form onSubmit={handlesubmit}>
            <StudentForm  getState={getState} nameValue={data.name} emailValue={data.email}
                rollNoValue={data.rollno}>
                    Update Student
                    </StudentForm>
        </form>
    )
}
export default EditStudent;
