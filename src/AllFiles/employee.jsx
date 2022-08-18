import { Button, ButtonGroup, WrapItem ,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useEffect,useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'



export const Employee=()=>{

 
    const [array,setArray] = useState([])
    const [data,setData]= useState([])

    useEffect(()=>{
        getdata()
    },[])


    const getdata=()=>{
        axios.get(`http://localhost:8080/employees`).then(res=>{
            setData(res.data)
        })
    }
    return(
        
        <div>
              <Box w="100%" pl="50%" pt={5} margin="">
              <Button colorScheme='orange'> <Link to="/employees/create">  Add New Employee</Link>    </Button>
              </Box>


              <div>



              <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Gender</Th>
        <Th>Department</Th>
        <Th>Salary</Th>
        <Th>Mobile Number</Th>
      </Tr>
    </Thead>
    <Tbody>
    {data.map((employee,index)=>{

        return(
          <>
            <Tr>
        <Td>{employee.first_name}</Td>
        <Td>{employee.age}</Td>
        <Td>{employee.gender}</Td>
        <Td>{employee.department}</Td>
        <Td>{employee.salary}</Td>
        <Td>{employee.mobile}</Td>
        {/* <Td>   <Button colorScheme='orange'>View</Button></Td> */}
      <Button colorSchema='orange'> <Link to={`/employees/${employee.id}`}> view2</Link></Button>      </Tr>
      {/* <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
    </Tr> */}
    </>

        )

    })}
    
     
     
    </Tbody>


  </Table>
</TableContainer>
              </div>

    

        </div>
    )
}