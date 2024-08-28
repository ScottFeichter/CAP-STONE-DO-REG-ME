import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkRestoreUser } from "../redux/sessionReducer.js";
import Navigation from "../components/Navigation/Navigation.jsx";
import SplashPage from "../components/Session/Splash.jsx";


function Layout() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((store) => store.session.user);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      dispatch(thunkRestoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);


    return (
      <>
        <ModalProvider>
          {sessionUser ? <Navigation /> : <SplashPage />}
          {isLoaded && <Outlet />}
          <Modal />
        </ModalProvider>
      </>
    );
  }

  export default Layout;
