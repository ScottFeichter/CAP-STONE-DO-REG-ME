import { NavLink } from 'react-router-dom';
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton/ProfileButton.jsx';
import * as sessionActions from '../../redux/sessionReducer.js';
import logo from "../../../../admin/images/logoDraft5.png"
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showFeature1, setShowFeature1] = useState(true);
  const [showFeature2, setShowFeature2] = useState(true);
  const [showFeature3, setShowFeature3] = useState(true);
  const [showFeature4, setShowFeature4] = useState(true);
  const [showFeature5, setShowFeature5] = useState(true);

  const dispatch = useDispatch();


  const liFeature1ClassName = "NavigationDropdownUlLi" + (showFeature1 ? "" : " NavigationDropdownUlLiHidden");

  const liFeature2ClassName = "NavigationDropdownUlLi" + (showFeature2 ? "" : " NavigationDropdownUlLiHidden");

  const liFeature3ClassName = "NavigationDropdownUlLi" + (showFeature3 ? "" : " NavigationDropdownUlLiHidden");

  const liFeature4ClassName = "NavigationDropdownUlLi" + (showFeature4 ? "" : " NavigationDropdownUlLiHidden");

  const liFeature5ClassName = "NavigationDropdownUlLi" + (showFeature5 ? "" : " NavigationDropdownUlLiHidden");


  return (
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


      <ul id="NavigationUlVertical">
        <li className={liFeature1ClassName}>
          <button>Feature1</button>
        </li>
        <li className={liFeature2ClassName}>
          <button>Feature2</button>
        </li>
        <li className={liFeature3ClassName}>
          <button>Feature3</button>
        </li>
        <li className={liFeature4ClassName}>
          <button>Feature4</button>
        </li>
        <li className={liFeature5ClassName}>
          <button>Feature5</button>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
