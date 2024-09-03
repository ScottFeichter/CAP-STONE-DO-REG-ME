//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "EmployeeDetails";

import './EmployeeDetails.css';

//==================PROGRAM IMPORTS=====================//
import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function EmployeeDetails(){
    const employee = useSelector(state => state.employees.employees[0])
    console.log("employee : ", employee)





//=================FUNCTION RETURN======================//
    return (<>

<main id="EmployeeDetailsMain">




        <div id='EmployeeDetailsForm' >

{/* form section 1---------------------------------------------------------- */}
            <section id="EmployeeDetailsFormSection1">

                <h4 id="EmployeeDetailsFormSection1H4">Personal Information</h4>



                <div id='firstName1Container' className='EmployeeDetailsFormLabelInputContainer'>
                        <div className='EmployeeDetailsFormLabel'>First Name 1:</div>
                        <div className='EmployeeDetailsFormInput'>{employee.firstName1}</div>
                </div>




            </section>

            <hr className='EmployeeDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}

            <section id="EmployeeDetailsFormSection2">
                <h4 id="EmployeeDetailsFormSection2H4">Employment Information</h4>



            </section>
            <hr className='EmployeeDetailsHr'></hr>

{/* form section 3---------------------------------------------------------- */}

            <section id="EmployeeDetailsFormSection3">
                <h4 id="EmployeeDetailsFormSection3H4">Biographical Information</h4>




            </section>
            <hr className='EmployeeDetailsHr'></hr>


{/* form section 4---------------------------------------------------------- */}




            <section id="EmployeeDetailsFormSection4">
                <h4 id="EmployeeDetailsFormSection4H4">Additional Employment Information</h4>



{/* -------------------------------- SECONDARY -----------------------------*/}



{/* -------------------------------- TERTIARY -----------------------------*/}



{/* -------------------------------- QUARTERNARY -----------------------------*/}





            </section>
            <hr className='EmployeeDetailsHr'></hr>



{/* to top button---------------------------------------------------------- */}






        </div>

</main>


    </>)
}

//===================FUNCTION EXPORT====================//
export default EmployeeDetails;
