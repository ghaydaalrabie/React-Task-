import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {


   const [inputs, setInputs] = useState([]);
    const navigate = useNavigate();

   const { id } = useParams();

   useEffect(() => {
     getUser();
   }, []);

   function getUser() {
     axios
       .get(`http://localhost/Database-task-/taskdatabase2/read.php?id=${id}`)
       .then(function (response) {
         console.log(response.data);
         setInputs(response.data);
       });
   }
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
      };
      const handleSubmit = (event) => {
                    console.log(inputs);

        event.preventDefault();
       inputs['id']=id
        axios
          .post(
            `http://localhost/Database-task-/taskdatabase2/update.php`,
            inputs, {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }}
          )
          .then(function (response) {
            console.log(response.data);
            navigate("/");
          });
      }; 
  return (
    <div>
      <h3>Edit user</h3>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input
                  value={inputs.employee_name}
                  type="text"
                  name="employee_name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input
                  value={inputs.email}
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td>
                <input
                  value={inputs.Address}
                  type="text"
                  name="Address"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Salary: </label>
              </th>
              <td>
                <input
                  value={inputs.Salary}
                  type="text"
                  name="Salary"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>position: </label>
              </th>
              <td>
                <input
                  value={inputs.position}
                  type="text"
                  name="position"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="right">
                <button className="button">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
