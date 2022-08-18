import axios from "axios"
import { useState } from "react"
import  "./employeecreate.css"



export const EmployeeCreate=()=>{

const [formdata,setformdata]= useState({
    first_name:"",
    age:"",
    gender:"",
    mobile:"",
    image:"",
    department:"",
    salary:"",
})



const API = "http://localhost:8080/employees";
const [data,setData]= useState([])

const handleChange=(e)=>{
    const {name,value}= e.target;
    setformdata({
        ...formdata,
        [name]:value,
    })
}



const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post(`${API}`, formdata).then(()=>{
        setformdata({
            first_name:"",
    age:"",
    gender:"",
    mobile:"",
    image:"",
    department:"",
    salary:"",

        })
    })
}




    return(
        <div>
        <h1>Employee Create page</h1>

        <form onSubmit={handleSubmit} className="addemployee">
            <div>
                Name:{}  <br></br>
                <input type="text"  name="first_name" className="first_name" placeholder="Enter your Name" onChange={handleChange}/>
            </div>   <br></br>

            <div>
                Age:{} <br></br>
                <input type="number"  name="age" className="age" placeholder="Enter your Age" onChange={handleChange}/>
            </div>  <br></br>


            <div>
                Gender:{} <br></br>
                <input type="text" name="gender" className="gender" placeholder="Enter your Gender" onChange={handleChange}/>
            </div> <br></br>

            <div>
                Contact Number:{} <br></br>
                <input type="number" name="mobile" className="mobile" placeholder="Enter your Mobile" onChange={handleChange}/>
            </div> <br></br>

            <div>
                Image Url:{} <br></br>
                <input type="text" name="image" className="image" placeholder="Enter your Image Url" onChange={handleChange}/>
            </div> <br></br>



            <div>
                Department:{} <br></br>
                <input type="text" name="department" className="department" placeholder="Enter your Department" onChange={handleChange}/>
            </div><br></br>


            <div>
                Salary:{}<br></br>
                <input type="text" name="salary" className="salary" placeholder="Enter your Salary" onChange={handleChange}/>
            </div><br></br><br></br>



            <input className="submit" type="submit" value="Submit" />



        </form>

        </div>
    )
}