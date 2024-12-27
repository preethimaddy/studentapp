import React, { useState,useEffect } from "react";
import "./SignUp.css";
import { Row, Table, Alert } from "react-bootstrap";
import axios from "axios"
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
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


  
//handleSubmit

const handleSubmit =(e) =>{
  e.preventDefault();
  setTableRecord([...tableRecord, newInput]);
  setNewInput({firstName:"", lastName:"", email:"", gender:"", password:"", number:""})
}

  // Add new input to form

  const addData = (e) => {
    //form field validation

    const { firstName, lastName, email, gender, password, number } = newInput;
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      gender !==""&&
      password !== "" &&
      number !== ""
    ) {
      const newData = [...tableRecord];
      newData.push(newInput);
      setTableRecord(newData);
      setNewInput(initialState);
      setAlert(false);
      postData(newData)
    }
    else{
      setAlert(true)
    }
  };
  // post data
const postData = async (newData) => {
  const body = newInput;
  const data = await axios.post(
    `https://64818d7329fa1c5c503198d5.mockapi.io/user`,
    body
  );
  console.log("post-data", data);
};

const editTrigger =()=>{

}
const deleteTableData =(index)=>{
const data = [...tableRecord];
data.splice(index, 1);
setTableRecord(data);

}

  return (
    <>
     <div className="m-3">
     {alert &&(
  <Alert   variant = {"danger"} dismissible  
  className="custom-alert text-center"
            onClick={() => setAlert(false)}>
      Please fill All mandatory fields*
  </Alert>
)}
     </div>
      <div className="container">
        <div className="signup">
          <form className="form" onSubmit={handleSubmit}>
         
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
            <button type="submit" className="btn btn-primary"
            onClick={addData}>
              Submit
            </button>
          </form>
        </div>
      </div>
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
                  ({ firstName, lastName, email, password, gender, number }, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                        <td>{password}</td>
                        <td>{number}</td>
                        <td onClick={()=> editTrigger(index)} className="cursor-pointer"><BiEdit /></td>
                        <td onClick={()=> deleteTableData(index,1)} className ="cursor-pointer"><MdDelete /></td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  );
};

export default SignUp;
