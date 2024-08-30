import './EmployeesList.css';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import EmployeesListIndex from './EmployeesListIndex';
import Pagination from "./Pagination";

function EmployeesList(){
    const employeesList = useSelector(state => state.employees);
    console.log(employeesList);

    const [currentPage, setCurrentPage] = useState(1);

    const [employeesPerPage, setEmployeesPerPage] = useState(20);


    const lastPostIndex = currentPage * employeesPerPage;
    const firstPostIndex = lastPostIndex - employeesPerPage;

    const currentPost = employeesList.employees.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return(
    <>
    <main className="EmployeeListMain">
      <h2>List of all employees</h2>

      <div className="EmployeeListContainer">
        {currentPost.map((employee, index) => {
          return (
            <EmployeesListIndex
              employee={employee}
              key={index}
              totalPages={employeesList.employees.length}
              employeesPerPage={employeesPerPage}
            />
          );
        })}
        <Pagination
          employeesPerPage={employeesPerPage}
          totalPages={employeesList.employees.length}
          paginate={paginate}
        />
      </div>
    </main>


    </>
    )
}

export default EmployeesList;
