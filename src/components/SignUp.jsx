import React, { useState,useEffect } from "react";
import "./SignUp.css";
import { Container,Row, Table, Alert } from "react-bootstrap";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Card from 'react-bootstrap/Card';

const SignUp = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password:"",
    number:"",
  };
  const [newInput, setNewInput] = useState(initialState);
  console.log("NewInput", newInput);
  const [tableRecord, setTableRecord] = useState([]);
  console.log("TableRecord", tableRecord);
  const [alert, setAlert] = useState(false);
  const[newpage, setNewpage] = useState(true);
  console.log("NewPage", newpage);
  const[editpage, setEditpage] = useState(false);
  console.log("EditPage", editpage);
const[editInput, setEditInput] = useState(null);
  console.log("EditInput",editInput)
const [editIndex, setEditIndex] = useState(null);
console.log("editIndex", editIndex);
  // function to get data
  const getData = async () => {
    try {
      const data1 = await axios.get(
        `https://64818d7329fa1c5c503198d5.mockapi.io/user`
      );
      const { data } = data1;
      setTableRecord(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const data = { ...newInput };
    data[name] = value;
    setNewInput(data);
  };

   const handleEdit = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    const data = {...editInput };
    data[name] = value;
    setEditInput(data)
  }
  //Edit Trigger
  const editTrigger =(index)=>{
    const editData = tableRecord[index];
    setEditInput(editData);
    setNewpage(false);
    setEditpage(true);
    setEditIndex(index)
  }
 
  //handleSubmit

  const addData = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, gender, password, number } = newInput;
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      gender !==""&&
      password !== "" &&
      number !== ""
    ) {
      try{
        const response = await axios.post(`https://64818d7329fa1c5c503198d5.mockapi.io/user`,
          newInput);
        setTableRecord([...tableRecord, response.data]); // Add new record to state
        setNewInput(initialState); // Reset form
        setAlert(false);
         //postData(newData);
      } catch (error) {
        console.error("Error adding record:", error);
      }
    } else {
      setAlert(true);
    }
  };

  //EDIT PAGE


  // deleting table record from both end

  const deleteTableData = async (id) => {
    //const data = [...tableRecord];
    try {
      // Optimistically remove from the frontend
      setTableRecord((prevRecords) =>
        prevRecords.filter((record) => record.id !== id));
      console.log(`Record with id ${id} deleted successfully`);

      const response = await axios.delete(`https://64818d7329fa1c5c503198d5.mockapi.io/user/${id}`);

      if(response.status === 200) {
        console.log(`Record with ID ${id} successfully deleted.`);
      }
      else {
        console.error("Failed to delete record:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  }; 
  // clear the data
  const clearData = () => {
  setNewInput (initialState);
  }
  
  // clear editData Func
  const clearEditData = () => {
    setEditInput(initialState);
  };
const cancelData =(e) =>{
  setNewpage(true);
  setEditIndex(null);
  setEditpage(false)
}
const addEditData = (e) => {
  e.preventDefault();

  const { firstName, lastName, email, gender, password, number,id } = editInput;
  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    gender !==""&&
    password !== "" &&
    number !== ""
  ) {
      const newData = [...tableRecord];
      newData[editIndex] = editInput;
      setTableRecord(newData); 
      setEditInput(initialState); // Reset form
      setAlert(false);
      // postData(newData);
   cancelData();
   edit(id);
  }
  else{
    setAlert(true);
  }
};
  // edit data to server
  const edit = async (id) => {
    try {
      const body = editInput;
      const result = await axios.put(
        `https://64818d7329fa1c5c503198d5.mockapi.io/user/${id}`,
        body
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="m-3">
        {alert && (
          <Alert
            variant={"danger"}
            dismissible
            className="custom-alert text-center"
            onClick={() => setAlert(false)}
          >
            Please fill All mandatory fields*
          </Alert>
        )}
      </div>
      <Container class="container my-4">
      {newpage ? ( 
        <div className="container">
        <div className="signup">
        <h3 className="text-center">Add New Data Form</h3>
          <form className="form">
            <div className="form-group">
              <label htmlFor="firstName">Enter your firstName </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={handleInput}
                value={newInput?.firstName}
                placeholder="firstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Enter your LastName</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleInput}
                value={newInput?.lastName}
                placeholder="lastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter your email ID</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleInput}
                value={newInput?.email}
                placeholder="abc@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
            <select
                     name="gender"
                     onChange={handleInput}
                     className="form-select" value={newInput?.gender} >
                        
                     <option value="">--select--</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     
                   </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter your Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleInput}
                value={newInput?.password}
                placeholder="*****"
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Enter your number</label>
              <input
                className="form-control"
                type="number"
                name="number"
                onChange={handleInput}
                value={newInput?.number}
                placeholder="98XXXXXXX"
              />
            </div>
            <br />
            <div>
            <button  onClick={addData} className="btn btn-primary"
            >
              Add
            </button>
            <button  onClick={clearData} className="btn btn-danger"
            >
              Clear
            </button>
            </div>
         
          </form>
          </div>
          </div>):("")}
          {editpage ? (
             <div className="container">
             <div className="signup">
               <form className="form" >
              <h3>Edit your old Data</h3>
                 <div className="form-group">
                   <label htmlFor="firstName">Enter your firstName </label>
                   <input
                     type="text"
                     className="form-control"
                     name="firstName"
                     onChange={handleEdit}
                     value={editInput?.firstName}
                     placeholder="firstName"
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="lastName">Enter your LastName</label>
                   <input
                     type="text"
                     className="form-control"
                     name="lastName"
                     onChange={handleEdit}
                     value={editInput?.lastName}
                     placeholder="lastName"
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="email">Enter your email ID</label>
                   <input
                     type="text"
                     className="form-control"
                     name="email"
                     onChange={handleEdit}
                     value={editInput?.email}
                     placeholder="abc@gmail.com"
                   />
                 </div>
                 <div>
                   <label htmlFor="gender">Gender</label>
                 <select
                          name="gender"
                          onChange={handleEdit}
                          className="form-select" value={editInput?.gender} >
                             
                          <option value="">--select--</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          
                        </select>
                 </div>
                 <div className="form-group">
                   <label htmlFor="password">Enter your Password</label>
                   <input
                     className="form-control"
                     type="password"
                     name="password"
                     onChange={handleEdit}
                     value={editInput?.password}
                     placeholder="*****"
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="number">Enter your number</label>
                   <input
                     className="form-control"
                     type="number"
                     name="number"
                     onChange={handleEdit}
                     value={editInput?.number}
                     placeholder="98XXXXXXX"
                   />
                 </div>
                 <br />
                 <button type="submit" className="btn btn-primary"  onClick={addEditData}
                 >
                   Submit
                 </button>
                 <button className="btn btn-danger"  onClick={clearEditData}
                 >
                   Clear
                 </button>
                 <button className="btn btn-warning"  onClick={cancelData}
                 >
                   Cancel
                 </button>
               </form>
               </div>
               </div>
          ):("")}
        
      <div className="div">
        <Row xs={6} md={6} className="p-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>email</th>
                <th>Gender</th>
                <th>Password</th>
                <th>Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableRecord?.length > 0 &&
                tableRecord.map(
                  (
                    {
                      id,
                      firstName,
                      lastName,
                      email,
                      password,
                      gender,
                      number,
                    },
                    index
                  ) => {
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                        <td>{password}</td>
                        <td>{number}</td>
                        <td
                          onClick={() => editTrigger(index)}
                          className="cursor-pointer"
                        >
                          <BiEdit />
                        </td>
                        <td
                          onClick={() => deleteTableData(id)}
                          className="cursor-pointer"
                        >
                          <MdDelete />
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </Table>
        </Row>
      </div>
      </Container>
      <Container className="container bg-light my-4" style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {tableRecord.map((tableRecord, index, id) =>(
             <Card key={index} className="shawdow-lg p-4">
             <div>
              <h5 className="text-lg font-bold">
                {tableRecord.firstName} {tableRecord.lastName} 
                </h5>
                <p><span  style={{fontWeight: 'bold'}}> Email: </span>{tableRecord.email}</p>
                <p><span  style={{fontWeight: 'bold'}}> Gender: </span> {tableRecord.gender}</p>
                <p><span  style={{fontWeight: 'bold'}}> Password: </span>{tableRecord.password}</p>
                <p><span  style={{fontWeight: 'bold'}}> Number: </span>{tableRecord.number}</p>
             </div>
             <div>
             <button
                          onClick={() => editTrigger(index)}
                          className="cursor-pointer"
                        >
                          <BiEdit />
                        </button>
                        <button
                          onClick={() => deleteTableData(id)}
                          className="cursor-pointer"
                        >
                          <MdDelete />
                        </button>
             </div>
             </Card>
          ))}
       
        </div>
    
      </Container>
    </>

  );
};

export default SignUp;
