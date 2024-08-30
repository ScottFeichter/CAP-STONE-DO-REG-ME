
import './Navigation.css';
// import { useSelector } from 'react-redux';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar.jsx';
import HorizontalNavBar from './HorizontalNavBar/HorizontalNavBar.jsx';

function Navigation(){
    // const sessionUser = useSelector(state => state.session.user);
  return (
    <>
      <HorizontalNavBar />
      <VerticalNavBar />
    </>
  );
}

export default Navigation;
