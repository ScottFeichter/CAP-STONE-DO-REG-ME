import './Employees.css';
import { useSelector } from 'react-redux';

function Employees() {
  const employees = useSelector(state => state.employees.employees);
  console.log("employees: ", employees);


  return(
    <>
        <main>
            <div>
                <h1>This is Employees!</h1>
            </div>
        </main>

    </>
  )
}

export default Employees;
