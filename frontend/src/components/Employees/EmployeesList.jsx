import './EmployeesList.css';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import EmployeesListIndex from './EmployeesListIndex';
import Pagination from "./Pagination";
import EmployeesListItemHeader from './EmployeesListItemHeader';

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
      {/* <h2>List of all employees</h2> */}
      <EmployeesListItemHeader />

      <div className="EmployeeListContainer">
        {currentPost.map((employee, id) => {
          return (
            <EmployeesListIndex
              employee={employee}
              key={id}
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
