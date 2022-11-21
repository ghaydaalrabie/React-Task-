import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {

    const name = event.target.name;

    const value = event.target.value;
        


    setInputs((values) => ({ ...values, [name]: value }));
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost/Database-task-/taskdatabase2/create.php", inputs, {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <div>
      <h4>Create New user</h4>
      <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input
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
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>position: </label>
              </th>
              <td>
                <input type="text" name="position" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Salary: </label>
              </th>
              <td>
                <input type="text" name="Salary" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Address: </label>
              </th>
              <td>
                <input type="text" name="Address" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
