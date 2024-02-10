import React, {useEffect, useState} from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function ListEmployee() {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();
	
	const sample_employees = [
		{
			"id": 10,
			"firstName":"Shan",
			"lastName":"Karn",
			"email":"shan.karn@gmail.com"
		},
			{
			"id": 11,
			"firstName":"Sunny",
			"lastName":"Karn",
			"email":"sunny.karn@gmail.com"
		},
		{
			"id": 12,
			"firstName":"ravi",
			"lastName":"Karn",
			"email":"ravi.karn@gmail.com"
		}
	];

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator("/add-employee")
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        if (window.confirm('Are you sure you want to delete this employee?')){
            deleteEmployee(id).then((respone) => {
                getAllEmployees();
            }).catch(error => {
                console.error(error);
            })
        }
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={ () => updateEmployee(employee.id) }>Update</button>
                                    <button className="btn btn-danger" style={{marginLeft: '10px'}} onClick={ () => removeEmployee(employee.id) }>Delete</button>
                                </td>
                            </tr>
                        )
                    }
					{/* Adding sample data when backend is not running */}
					{
						sample_employees.map(sample_employee => 
							<tr key={sample_employee.id}>
								<td>{sample_employee.id}</td>
								<td>{sample_employee.firstName}</td>
								<td>{sample_employee.lastName}</td>
								<td>{sample_employee.email}</td>
								<td>
									<button className="btn btn-info" onClick={ () => updateEmployee(sample_employee.id) }>Update</button>
									<button className="btn btn-danger" style={{marginLeft: '10px'}} onClick={ () => removeEmployee(sample_employee.id) }>Delete</button>
								</td>
							</tr>
						)
					}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployee;