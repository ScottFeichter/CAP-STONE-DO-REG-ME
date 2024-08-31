import './EmployeesListIndex.css';
// import { Link } from "react-router-dom";

function EmployeesListIndex({ employee }) {
  return (
    <>


      <div className="EmployeeListIndexContainer">

        <div className="EmployeeListIndexItemContainerID">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.id}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerED">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.employeeDepartment_Id
              ? employee.employeeDepartment_Id
              : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerAD">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.academicDepartment_Id
              ? employee.academicDepartment_Id
              : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerName">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.firstName1 + " " + employee.lastName1}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerPhone">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.personalPhone ? employee.personalPhone : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerEmail">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.personalEmail ? employee.personalEmail : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerLang">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.firstLang ? employee.firstLang : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerLang">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.secondLang ? employee.secondLang : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerInst">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.firstInst ? employee.firstInst : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerInst">
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.secondInst ? employee.secondInst : "N/A"}
          </p>
        </div>

      </div>
      <div className="EmployeeListIndexBorder"></div>
    </>
  );
}

export default EmployeesListIndex;
