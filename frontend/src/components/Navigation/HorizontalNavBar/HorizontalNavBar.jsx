import './HorizontalNavBar.css';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton.jsx'
import logo from '../../../../../ADMIN/images/logoDraft5.png'

function HorizontalNavBar() {
  const sessionUser = useSelector(state => state.session.user);

  return(
    <>
      <ul id="NavigationUlHorizontal">
        <li className="NavigationTopBarUlLi" >
          <ProfileButton user={sessionUser} id="NavigationProfileButton"/>
        </li>
        <li className="NavigationTopBarUlLi">
          <input type="text"></input>
        </li>
        <li className="NavigationTopBarUlLi">
          <img src={logo} alt="DoRegMi" id="NavigationImgLogo"></img>
        </li>
      </ul>
    </>
  )
}

export default HorizontalNavBar;
