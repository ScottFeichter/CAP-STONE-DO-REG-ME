
import './Navigation.css';
import { useSelector } from 'react-redux';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar.jsx';
import HorizontalNavBar from './HorizontalNavBar/HorizontalNavBar.jsx';

function Navigation(){
    const user = useSelector(state => state.session.user);


  return (
    <>
      <HorizontalNavBar user={user}/>
      <VerticalNavBar />
    </>
  );
}

export default Navigation;
