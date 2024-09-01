import './Employees.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import EmployeesList from './EmployeesList';

function Employees() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewEmployeeForm');
  }


  return(
    <>
        <main id="EmployeesMain">

            <nav id="EmployeesNav">
              <button id="EmployeesCreateButton" onClick={handleClick}>Create New Employee</button>
              <h1 id="EmployeesH1">Employees</h1>
              <input type="text" id="EmployeesSearchBar" placeholder='Search Employees' ></input>
            </nav>





            <EmployeesList />

        </main>
    </>
  )
}

export default Employees;
