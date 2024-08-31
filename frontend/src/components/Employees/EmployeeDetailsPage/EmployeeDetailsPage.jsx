import './EmployeeDetailsPage.css';
import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function EmployeeDetailsPage() {
  // const employee = useSelector(state => state.employees.employees[0]);
  const location = useLocation();
  console.log("LOCATION.STATE: ",location.state);
  const {employee} = location.state;
  console.log("employee: ", employee);

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

// for (let i = 0; i < employeeObjectEntries.length; i++){};



  return(
    <>
        <main>
            <h1>This is EmployeeDetailsPage!</h1>
            <div><h2>Here are the details</h2>

                {employeeObjectEntries.map((arr)=> { return (<p key={arr[0]}>{arr}</p>)})}
                  {/* // {<div><p>{`${arr[0]}`}</p><p>{`${arr[1]}`}</p></div>} */}


            </div>
        </main>
    </>
  )
}

export default EmployeeDetailsPage;
