//============================ CSS IMPORT AND BASE CLASS NAME===================================//

import './EmployeeDetailsKeyValue.css';
const BASE_CLASS_NAME = "EmployeeDetailsKeyValue";

//======================================OTHER IMPORTS===========================================//


//===================================FUNCTION DECLARATION=======================================//
function EmployeeDetailsKeyValue({k, v}){




//===================================FUNCTION RETURN========================================//
    return (<>
        <main className={`${BASE_CLASS_NAME}Main`}>
            <div className={`${BASE_CLASS_NAME}Div`}>
                <p className={`${BASE_CLASS_NAME}P`}>{k}</p>
                <p className={`${BASE_CLASS_NAME}P`}>{v}</p>
            </div>
        </main>
    </>)
}

//===================================FUNCTION EXPORT=========================================//
export default EmployeeDetailsKeyValue;
