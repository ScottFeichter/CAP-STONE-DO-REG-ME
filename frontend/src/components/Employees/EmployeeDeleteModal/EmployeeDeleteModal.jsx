import { useModal } from "../../../context/Modal";
import {useDispatch } from 'react-redux'
import * as employeesActions from '../../../redux/employeesReducer.js';
import "./EmployeeDeleteModal.css"



function EmployeeDeleteModal({employee}) {

    const dispatch = useDispatch();
    const { closeModal } = useModal();

    // console.log('SPOT!!!!!!!!!!!!!!!!', employee.id)


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(employeesActions.thunkDeleteEmployee(employee))
            .then(() => {return dispatch(employeesActions.thunkGetEmployeesAll())})
            .then(()=> closeModal())
    };


//  handlerKeep-------------------------------------------


    const handleKeep = (e) => {
        e.preventDefault();
        closeModal()
        return
    };



//  return-------------------------------------------
    return (
        <main id="EmployeeDeleteModalMain">

            <h1 id="EmployeeDeleteModalH1">Confirm Delete</h1>
            <p id="EmployeeDeleteModalP">Are you sure you want to remove this employee?</p>

            <div id="EmployeeDeleteModalButtonContainer">

                <button
                    id="YesEmployeeDeleteButton"
                    name="YesEmployeeDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete Employee)"}</button>


                <button
                    id="NoKeepEmployeeButton"
                    name="NoKeepEmployeeButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep Employee)"}</button>

            </div>

      </main>

    )
}

export default EmployeeDeleteModal;
