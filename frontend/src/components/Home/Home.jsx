import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {


  return(
    <>
        <main>
            <div>
                <h1>This is home!</h1>
                <NavLink to="/temp">temp</NavLink>
            </div>
        </main>

    </>
  )
}

export default Home;
