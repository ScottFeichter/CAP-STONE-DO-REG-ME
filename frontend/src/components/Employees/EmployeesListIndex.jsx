import './EmployeesListIndex.css';
// import { Link } from "react-router-dom";

function EmployeesListIndex({ employee }) {
  return (
    <>


      <div className="EmployeeListIndexContainer">

        <div className="EmployeeListIndexItemContainerID">
          <h4 className="EmployeeListIndexItemH4">ID</h4>

          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.id}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerED">
          <h4 className="EmployeeListIndexItemH4">ED</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.employeeDepartment_Id
              ? employee.employeeDepartment_Id
              : "N/A"}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerAD">
          <h4 className="EmployeeListIndexItemH4">AD</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.academicDepartment_Id
              ? employee.academicDepartment_Id
              : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerName">
        <h4 className="EmployeeListIndexItemH4">Name</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.firstName1 + " " + employee.lastName1}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerGeneral">
          <h4 className="EmployeeListIndexItemH4">Phone</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.personalPhone ? employee.personalPhone : "N/A"}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerGeneral">
          <h4 className="EmployeeListIndexItemH4">Email</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.personalEmail ? employee.personalEmail : "N/A"}
          </p>
        </div>

        <div className="EmployeeListIndexItemContainerLang">
          <h4 className="EmployeeListIndexItemH4">1st Lang</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.firstLang ? employee.firstLang : "N/A"}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerLang">
          <h4 className="EmployeeListIndexItemH4">2nd Lang</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.secondLang ? employee.secondLang : "N/A"}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerInst">
          <h4 className="EmployeeListIndexItemH4">1st Inst</h4>
          <p to={`/employees/${employee.id}`} className="EmployeeListIndexItemP">
            {employee.firstInst ? employee.firstInst : "N/A"}
          </p>
        </div>
        <div className="EmployeeListIndexItemContainerInst">
          <h4 className="EmployeeListIndexItemH4">2nd Inst</h4>
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
