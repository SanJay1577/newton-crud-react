import React, { useState } from "react";
import { data } from "../Dataset/data.js";
function Students() {
  const [students, setStudents] = useState(data);

  // initializing a state for each information...

  const [roll, setRoll] = useState();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [editId, setEditId] = useState(); 
  const [sal, setSal] = useState();

  const deleteStudent = (idx) => {
    const RemainingStudents = students.filter((stud) => stud.id !== idx);
    setStudents(RemainingStudents);
  };


const addAStudent = ()=>{
  // initialzing the new obj
 const newStudent = {
  id:roll, 
  name: name,
  city:city,
  state:state,
  expected:sal,
 }
// setting the new obj to the old array 
 setStudents([...students, newStudent]);  
}




 const newEditedStudent = ()=>{

    const selectedStudent = students.findIndex((student)=>student.id === editId);
    const editedStudent = {
      id:roll, 
      name: name,
      city:city,
      state:state,
      expected:sal,
     }

   students[selectedStudent] = editedStudent; 
  setStudents([...students]);
    
 }

  return (
    <div>

      <div className="input-section">
        
          <input
           placeholder="Enter your Id" 
           onChange={(event)=>setRoll(event.target.value)}
           value={roll}
           type="Number" 
           name="id" />

          <input 
          placeholder="Enter your Name" 
          onChange={(event)=>setName(event.target.value)}
          value={name}
          type="text" 
          name="name"
           />
          <input 
          placeholder="Enter your City" 
          onChange={(event)=>setCity(event.target.value)}
          value={city}
          type="text"
           name="city" />

          <input 
          placeholder="Enter your State"
          onChange={(event)=>setState(event.target.value)}
          value={state}
          type="text" 
          name="state" />

          <input
            placeholder="Enter your exp-sal"
            onChange={(event)=>setSal(event.target.value)}
            value={sal}
            type="number"
            name="exp-sal"
          />

          <button className="add-btn" onClick={addAStudent}>
            Add User
          </button>

          <button className="add-btn" onClick={newEditedStudent}>
            Edit User
          </button>
    
      </div>
      
     {students && (

      <div className="main-container">
        {students?.map((stu, idx) => (
          <div key={stu?.id} className="card-container">
            <div>Student id {stu?.id}</div>
            <div>Name of the Student : {stu?.name}</div>
            <div>City of the Student: {stu?.city}</div>
            <div>State of the Student:{stu?.state}</div>
            <div>Expected Salary of the Student: {stu?.expected}</div>
            <div>The Array id is {idx}</div>
            <button className="edit-btn" onClick={() => setEditId(stu.id)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteStudent(stu.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      )}

    </div>
  );
}

export { Students };

//Deleteing Steps
// 1. Have a functionality for selected the element
//passing a specifuc id

//CRUD - Create, Read, update and delete

//1. Delete part
//2. Read done
//3. create done 

//We need to add a data dynamically --
// edit the data   ---completed it 

//condtional fetching data

// to-dos -- our todos 

// dynamic edit functionality
// fetching a data from outside 
// routing part 
// third party sytling --



