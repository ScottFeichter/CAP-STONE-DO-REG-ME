
import './Navigation.css';
import { useSelector } from 'react-redux';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar.jsx';
import HorizontalNavBar from './HorizontalNavBar/HorizontalNavBar.jsx';

function Navigation(isLoaded){
    const user = useSelector(state => state.session.user);
    const propsForButton = {isLoaded: isLoaded, user: user }
    console.log("isLoaded: ", isLoaded);
    console.log("propsForButton: ", propsForButton);


  return (
    <>
      <HorizontalNavBar propsForButton={propsForButton}/>
      <VerticalNavBar />
    </>
  );
}

export default Navigation;
