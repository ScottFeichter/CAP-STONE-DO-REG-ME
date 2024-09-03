//============CSS IMPORT AND BASE CLASS NAME============//

import './EmployeeDetailsPage.css';
const BASE_CLASS_NAME = "EmployeeDetailsPage";


//==================OTHER IMPORTS=======================//

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';
// import { useSelector } from 'react-redux';


//===============FUNCTION DECLARATION===================//

function EmployeeDetailsPage() {
  // const employee = useSelector(state => state.employees.employees[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const {employee} = location.state;


  const employeeObjectKeys = Object.keys(employee);
  const employeeObjectValues = Object.values(employee);
  const employeeObjectEntries = Object.entries(employee);
  // const test = "test";


 const {
    id,
    employeeDepartment_Id,
    academicDepartment_Id,
    userType_Id,
    firstName1,
    firstName2,
    middleName,
    lastName1,
    lastName2,
    personalEmail,
    personalPhone,
    street,
    city,
    state,
    zip,
    dob,
    age,
    ssn,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    primaryTitle,
    primaryStartDate,
    primaryEndDate,
    primaryPayRate,
    secondaryTitle,
    secondaryStartDate,
    secondaryEndDate,
    secondaryPayRate,
    tertiaryTitle,
    tertiaryStartDate,
    tertiaryEndDate,
    tertiaryPayRate,
    quarternaryTitle,
    quarternaryStartDate,
    quarternaryEndDate,
    quarternaryPayRate,
    biography,
    notes,

     } = employee;

 console.log("OBJECT.KEYS EMPLOYEE: ", employeeObjectKeys);
 console.log("OBJECT.VALUES EMPLOYEE: ", employeeObjectValues);
 console.log("OBJECT.ENTRIES EMPLOYEE: ", employeeObjectEntries);

 console.log("DESTRUCTURED EMPLOYEE: ",
    id,
    employeeDepartment_Id,
    academicDepartment_Id,
    userType_Id,
    firstName1,
    firstName2,
    middleName,
    lastName1,
    lastName2,
    personalEmail,
    personalPhone,
    street,
    city,
    state,
    zip,
    dob,
    age,
    ssn,
    firstLang,
    secondLang,
    thirdLang,
    firstInst,
    secondInst,
    thirdInst,
    primaryTitle,
    primaryStartDate,
    primaryEndDate,
    primaryPayRate,
    secondaryTitle,
    secondaryStartDate,
    secondaryEndDate,
    secondaryPayRate,
    tertiaryTitle,
    tertiaryStartDate,
    tertiaryEndDate,
    tertiaryPayRate,
    quarternaryTitle,
    quarternaryStartDate,
    quarternaryEndDate,
    quarternaryPayRate,
    biography,
    notes,
)


const handleClickEditEmployee = (e) => {
  e.preventDefault();
  navigate('/employees/:employee_Id/editForm')
}

const handleClickDeleteEmployee = (e) => {
  e.preventDefault();
  navigate('/employees/:employee_Id/deleteModal')
}




//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BASE_CLASS_NAME}H1`}>Employee Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>
              <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditEmployee}>Edit Employee</button>

              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteEmployee}>Delete Employee</button>
            </nav>


            <div>

              {/* <EmployeeDetails></EmployeeDetails> */}





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default EmployeeDetailsPage;
