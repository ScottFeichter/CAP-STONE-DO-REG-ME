import './Home.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as branchesActions from '../../redux/branchesReducer.js';

function Home() {
  const dispatch = useDispatch();

  dispatch(branchesActions.thunkGetBranchesAll());


  useEffect(()=> {
    dispatch(branchesActions.thunkGetBranchesAll());
 
  }, [dispatch]);






  return(
    <>
        <main>
            <div>
                <h1>This is home!</h1>
            </div>
        </main>

    </>
  )
}

export default Home;
