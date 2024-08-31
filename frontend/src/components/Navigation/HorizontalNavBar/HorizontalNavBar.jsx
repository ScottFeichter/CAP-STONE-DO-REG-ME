import './HorizontalNavBar.css';
// import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton.jsx'
import logo from '../../../../../ADMIN/images/logoDraft5.png'

function HorizontalNavBar() {
  // const sessionUser = useSelector(state => state.session.user);


  return(
    <>
      <main id="HorizontalNavBarMain">

          <img id="NavigationImgLogo" src={logo} alt="DoRegMi" ></img>

          <input type="text"></input>

          <ProfileButton />

      </main>
    </>
  )
}

export default HorizontalNavBar;
