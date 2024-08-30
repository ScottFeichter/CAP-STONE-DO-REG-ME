import { CgProfile } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as sessionActions from '../../../redux/sessionReducer';
import "./ProfileButton.css"


function ProfileButton({user}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();



  // called onClick from button to toggle showMenu
  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false)
      return;
    }
    setShowMenu(true);
  };


  // if showMenu is false return otherwise when showMenu is true
  // add event listener for click anywhere on page
  // and when click close Menu and set showMenu to false
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  // logout handler for the logout button in the drop down menu
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.thunkLogout());
    navigate('/')
  };


  const ulClassName = "ProfileButtonDropdownUl" + (showMenu ? "" : " ProfileButtonDropdownUlHidden");

  return (
    <>
      <button onClick={toggleMenu} ref={ulRef}><CgProfile /></button>
        {/* <div id="PofileButtonDropdownLiContainerDiv"> */}
          <ul className={ulClassName} >
            <li className={"ProfileButtonDropdownUlLi"}>{user.username}</li>
            <li className={"ProfileButtonDropdownUlLi"}>{user.firstName} {user.lastName}</li>
            <li className={"ProfileButtonDropdownUlLi"}>{user.email}</li>
            <li className={"ProfileButtonDropdownUlLi"}>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        {/* </div> */}
    </>
  );
}

export default ProfileButton;
