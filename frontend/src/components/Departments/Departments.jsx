import './Departments.css';
import { useSelector } from 'react-redux';

function Departments() {
  const employeeDepartments = useSelector(state => state.employeeDepartments.employeeDepartments);
  const academicDepartments = useSelector(state => state.academicDepartments.academicDepartments);
  console.log("employeeDepartments: ", employeeDepartments);
  console.log("academicDepartments: ", academicDepartments);



  return(
    <>
        <main>
            <div>
                <h1>This is Departments!</h1>
            </div>
        </main>

    </>
  )
}

export default Departments;
