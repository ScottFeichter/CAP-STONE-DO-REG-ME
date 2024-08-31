import './VerticalNavBar.css';
import { useNavigate } from "react-router-dom";

function VerticalNavBar(){
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);

    //============================FOR USER TYPE ACCESS START====================================

    // const [showResources, setShowResources] = useState(true);
    // const [showDepartments, setShowDepartments] = useState(true);
    // const [showStudents, setShowStudents] = useState(true);
    // const [showEmployees, setShowEmployees] = useState(true);

    // const liResourcesClassName = "NavigationDropdownUlLi" + (showResources ? "" : " NavigationDropdownUlLiHidden");

    // const liDepartmentsClassName = "NavigationDropdownUlLi" + (showDepartments ? "" : " NavigationDropdownUlLiHidden");

    // const liStudentsClassName = "NavigationDropdownUlLi" + (showStudents ? "" : " NavigationDropdownUlLiHidden");

    // const liEmployeesClassName = "NavigationDropdownUlLi" + (showEmployees ? "" : " NavigationDropdownUlLiHidden");

    //============================FOR USER TYPE ACCESS END====================================


    //============================VERTICAL NAV HANDLERS START=================================

      const handleHomeClick = (e) => {
        e.preventDefault;
        navigate('/')
      }

      const handleResourcesClick = (e) => {
        e.preventDefault;
        navigate('/resources/')
      }

      const handleDepartmentsClick = (e) => {
        e.preventDefault;
        navigate('/departments')
      }

      const handleStudentsClick = (e) => {
        e.preventDefault;
        navigate('/students')
      }

      const handleEmployeesClick = (e) => {
        e.preventDefault;
        navigate('/employees')
      }
      //============================VERTICAL NAV HANDLERS END===================================


  return (
        <>
            <ul id="VerticalNavBarUl">
                <li className="VerticalNavBarLi">
                    <button onClick={handleHomeClick}>Home</button>
                </li>
                <li className="VerticalNavBarLi">
                    <button onClick={handleResourcesClick}>Resources</button>
                </li>
                <li className="VerticalNavBarLi">
                    <button onClick={handleDepartmentsClick}>Departments</button>
                </li>
                <li className="VerticalNavBarLi">
                    <button onClick={handleStudentsClick}>Students</button>
                </li>
                <li className="VerticalNavBarLi">
                    <button onClick={handleEmployeesClick}>Employees</button>
                </li>
            </ul>
        </>
    );
}

export default VerticalNavBar;
