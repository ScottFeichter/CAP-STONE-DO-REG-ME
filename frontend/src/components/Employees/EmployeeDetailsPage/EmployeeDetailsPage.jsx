//============CSS IMPORT AND BASE CLASS NAME============//

import './EmployeeDetailsPage.css';
const BASE_CLASS_NAME = "EmployeeDetailsPage";


//==================OTHER IMPORTS=======================//

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';
import EmployeeDeleteModal from '../EmployeeDeleteModal/EmployeeDeleteModal';
import EmployeeDeleteModalButton from '../EmployeeDeleteModal/EmployeeDeleteModalButton'
// import { useSelector } from 'react-redux';


//===============FUNCTION DECLARATION===================//

function EmployeeDetailsPage() {
  // const employee = useSelector(state => state.employees.employees[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const {employee} = location.state;



const handleClickEditEmployee = (e) => {
  e.preventDefault();
  navigate('/employees/:employee_Id/editForm')
}

const handleClickDeleteEmployee = (e) => {
  e.preventDefault();
  e.stopPropagation();
  // navigate('/employees/:employee_Id/deleteModal')
}




//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BASE_CLASS_NAME}H1`}>Employee Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>
              <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditEmployee}>Edit Employee</button>
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
                            // id="deleteEmployeeModalButton"
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
