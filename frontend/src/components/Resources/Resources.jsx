import './Resources.css';
import { useSelector } from 'react-redux';

function Resources() {
  const employeeDepartments = useSelector(state => state.employeeDepartments.employeeDepartments);
  console.log(employeeDepartments);



  return(
    <>
        <main>
            <div>
                <h1>This is Resources!</h1>
            </div>
        </main>

    </>
  )
}

export default Resources;
