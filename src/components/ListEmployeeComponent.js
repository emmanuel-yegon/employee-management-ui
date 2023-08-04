import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <table className="table table-bordered table-stripes">
        <thead>
          <th>Employee Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email ID</th>
          <th>Contact No</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.contact_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
