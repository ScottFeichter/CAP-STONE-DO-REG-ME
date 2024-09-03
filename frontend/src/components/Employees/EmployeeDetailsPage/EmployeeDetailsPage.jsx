//============CSS IMPORT AND BASE CLASS NAME============//

import './EmployeeDetailsPage.css';
const BASE_CLASS_NAME = "EmployeeDetailsPage";


//==================OTHER IMPORTS=======================//

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDetails from './EmployeeDetails';
import EmployeeDeleteModal from '../EmployeeDeleteModal/EmployeeDeleteModal';
import EmployeeDeleteModalButton from '../EmployeeDeleteModal/EmployeeDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function EmployeeDetailsPage() {

  const navigate = useNavigate();
  let employee;
  let employees;
  let employeeId;
  let employeeParams;

  let location;

  try {
      employeeParams = useParams();
      employeeId  = employeeParams.employeeId;
      employees = useSelector(state => state?.employees?.employees);
      employee = employees.find(employee => employee.id === +employeeId)
  } catch (err) {
        console.log("err 38", err);
        try {
          location = useLocation();
          employee = location.state.employee;
        } catch (error) {
          console.log("error 45: ", err);
          navigate("/employees");
        }
  } finally {
    console.log("employee 49 : ", employee);
    console.log("employeeParams: ", employeeParams);
    console.log("employeeId : ", employeeId);
    console.log('employees : ', employees);
    console.log("location : ", location);
    console.log("employee 54 : ", employee);
  }




const handleClickEditEmployee = () => {
  // e.preventDefault();
  // navigate('/editEmployeeForm')
}




//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BASE_CLASS_NAME}H1`}>Employee Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>

           <Link to='/editEmployeeForm' state={{employeeToEdit: employee}} >
           <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditEmployee}>Edit Employee</button>
           </Link>





{/*
              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteEmployee}>
                Delete Employee
                <EmployeeDeleteModalButton
                            id="deleteEmployeeModalButton"
                            buttonText="Delete Employee"
                            modalComponent={<EmployeeDeleteModal employee={employee} />}
                            />

              </button> */}

              <EmployeeDeleteModalButton
                id={`${BASE_CLASS_NAME}DeleteButton`}
                buttonText="Delete Employee"
                modalComponent={<EmployeeDeleteModal employee={employee} />}
              />

            </nav>


            <div>

              <EmployeeDetails employee={employee}></EmployeeDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default EmployeeDetailsPage;
