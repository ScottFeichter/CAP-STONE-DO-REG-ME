import './EmployeesListIndex.css';
import { Link } from "react-router-dom";

function EmployeesListIndex({ employee }) {
  return (
    <>


      <div className="EmployeeListIndexContainer">

        <div className="EmployeeListIndexItemContainerID">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.id}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerED">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.employeeDepartment_Id
                ? employee.employeeDepartment_Id
                : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerAD">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.academicDepartment_Id
                ? employee.academicDepartment_Id
                : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerName">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.firstName1 + " " + employee.lastName1}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerPhone">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.personalPhone
                ? employee.personalPhone
                : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerEmail">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.personalEmail
                ? employee.personalEmail
                : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerLang">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.firstLang
                ? employee.firstLang
                : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerLang">
          <Link
          to={`/employees/${employee.id}`}
          state={{employee: employee}}
          className="EmployeeListIndexItemP">
            {employee.secondLang
              ? employee.secondLang
              : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerInst">
          <Link
            to={`/employees/${employee.id}`}
            state={{employee: employee}}
            className="EmployeeListIndexItemP">
              {employee.firstInst
                ? employee.firstInst
                : "N/A"}
          </Link>
        </div>

        <div className="EmployeeListIndexItemContainerInst">
          <Link
          to={`/employees/${employee.id}`}
          state={{employee: employee}}
          className="EmployeeListIndexItemP">
            {employee.secondInst
              ? employee.secondInst
              : "N/A"}
          </Link>
        </div>

      </div>
      <div className="EmployeeListIndexBorder"></div>
    </>
  );
}

export default EmployeesListIndex;
