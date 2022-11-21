import React from 'react'
import axios from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Update from "./update";
import Create from "./create";



const Employee = ({ Address, Salary, email, employee_name, id, position }) => {

  console.log("employee", Address);

                console.log(id);


const onDelete = (id) => {

        axios
          .get(
            `http://localhost/Database-task-/taskdatabase2/delete.php?id=${id}`
          )
          .then((getData) => {
            console.log(getData);

          });
}

  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="mt-5 mb-3 clearfix"></div>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Salary</th>
                  <th>position</th>
                  <th>Email</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{employee_name}</td>
                  <td>{Address}</td>
                  <td>{Salary}</td>
                  <td>{position}</td>
                  <td>{email}</td>

                  <td>
                    <BrowserRouter>
                      <Routes>
                        <Route exact path="update/:id" element={<Update />} />
                        <Route  path="create" element={<Create />} />
                      </Routes>
                      <Link to={`update/${id}/`}>
                        <div className='update'>Update</div>
                      </Link>
                    </BrowserRouter>

                    <a
                      href="delete.php?id='. $row['id'] .'"
                      title="Delete Record"
                      data-toggle="tooltip"
                    >
                      <div className='delete' onClick={() => onDelete(id)}>Delete</div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Employee