import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { Employee } from "../AllFiles/employee"
import { EmployeeCreate } from "../AllFiles/employeecreate"
import { EmployeeDetail } from "../AllFiles/employeeDetail"
import { Home } from "../AllFiles/home"
import { Navbar } from "./Navbar"
// import { Navbar } from "./Navbar"


export const AllRoutes=()=>{
    return(

        <>
      <Navbar/>
    <Routes>
    
        <Route path="/" element={<Home/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/employees/create" element={<EmployeeCreate/>}/>
        {/* <Route path="/employees/:id" element={<EmployeeDetail/>}/> */}
        <Route path="/employees/:id" element={<EmployeeDetail/>}/>
    </Routes>
    </>
    )

}