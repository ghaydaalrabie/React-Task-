import './App.css';
import React, { useState, useEffect } from 'react';
import Employee from "./employee";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Create from "./create";



const API_URL = "http://localhost/Database-task-/taskdatabase2/";


function App() {


  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setEmployee(data);
      })
  }, [])



  return (
    <div className="App">
      {employee.length > 0 ? (

        <div className="container">
          <div className="grid">
            <h2 className="pull-left">Employees List</h2>
            <BrowserRouter>
              <Routes>
                
                <Route exact path="create" element={<Create />} />
              </Routes>
              <Link to='create'>
                <div className='create'> <h4> </h4>Create New User + </div>
                
              </Link>
            </BrowserRouter>
            {employee.map((movieReq) => (
              <Employee key={movieReq.id} {...movieReq} />
            ))}
          </div>
        </div>
      ) : (
        <h2>Sorry !! No Data Found</h2>
      )}
    </div>

  );
}

export default App;
