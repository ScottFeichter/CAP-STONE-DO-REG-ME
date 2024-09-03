//============CSS IMPORT AND BASE CLASS NAME============//

import './EmployeeDepartmentDetailsPage.css';
const BASE_CLASS_NAME = "EmployeeDepartmentDetailsPage";


//==================OTHER IMPORTS=======================//

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmployeeDepartmentDetails from './EmployeeDepartmentDetails';
import EmployeeDepartmentDeleteModal from '../EmployeeDepartmentDeleteModal/EmployeeDepartmentDeleteModal';
import EmployeeDepartmentDeleteModalButton from '../EmployeeDepartmentDeleteModal/EmployeeDepartmentDeleteModalButton'



//===============FUNCTION DECLARATION===================//

function EmployeeDepartmentDetailsPage() {

  const navigate = useNavigate();
  let employeeDepartment;
  let employeeDepartments;
  let employeeDepartmentId;
  let employeeDepartmentParams;

  let location;

  try {
      employeeDepartmentParams = useParams();
      employeeDepartmentId  = employeeDepartmentParams.employeeDepartmentId;
      employeeDepartments = useSelector(state => state?.employeeDepartments?.employeeDepartments);
      employeeDepartment = employeeDepartments.find(employeeDepartment => employeeDepartment.id === +employeeDepartmentId)
  } catch (err) {
        // console.log("err 38", err);
        try {
          location = useLocation();
          employeeDepartment = location.state.employeeDepartment;
        } catch (error) {
          // console.log("error 45: ", err);
          navigate("/employeeDepartments");
        }
  } finally {
    // console.log("employeeDepartment 49 : ", employeeDepartment);
    // console.log("employeeDepartmentParams: ", employeeDepartmentParams);
    // console.log("employeeDepartmentId : ", employeeDepartmentId);
    // console.log('employeeDepartments : ', employeeDepartments);
    // console.log("location : ", location);
    // console.log("employeeDepartment 54 : ", employeeDepartment);
  }




const handleClickEditEmployeeDepartment = () => {
  // e.preventDefault();
  // navigate('/editEmployeeDepartmentForm')
}




//=================FUNCTION RETURN======================//

  return(
    <>
        <h1 id={`${BASE_CLASS_NAME}H1`}>Employee Department Details</h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            <nav id={`${BASE_CLASS_NAME}Nav`}>

           <Link to='/editEmployeeDepartmentForm' state={{employeeDepartmentToEdit: employeeDepartment}} >
           <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditEmployeeDepartment}>Edit Employee Department</button>
           </Link>





{/*
              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteEmployee}>
                Delete Employee
                <EmployeeDepartmentDeleteModalButton
                            id="deleteEmployeeModalButton"
                            buttonText="Delete Employee"
                            modalComponent={<EmployeeDepartmentDeleteModal employeeDepartment={employeeDepartment} />}
                            />

              </button> */}

              <EmployeeDepartmentDeleteModalButton
                id={`${BASE_CLASS_NAME}DeleteButton`}
                buttonText="Delete Employee Department"
                modalComponent={<EmployeeDepartmentDeleteModal employeeDepartment={employeeDepartment} />}
              />

            </nav>


            <div>

              <EmployeeDepartmentDetails employeeDepartment={employeeDepartment}></EmployeeDepartmentDetails>





            </div>
        </main>
    </>
  )
}


//===================FUNCTION EXPORT====================//
export default EmployeeDepartmentDetailsPage;
