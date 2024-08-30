import './Employees.css';
import { useSelector } from 'react-redux';
import EmployeesList from './EmployeesList';

function Employees() {
  const employees = useSelector(state => state.employees.employees);
  console.log("employees: ", employees);


  return(
    <>
        <main>
            <div>
                <h1>This is Employees!</h1>
            </div>
            <EmployeesList />

        </main>
    </>
  )
}

export default Employees;
