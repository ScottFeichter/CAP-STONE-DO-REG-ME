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

            <h1 id="EmployeesH1">Employees</h1>

            <button id="EmployeesCreateButton" onClick={handleClick}>Create New Employee</button>

            <EmployeesList />

        </main>
    </>
  )
}

export default Employees;
