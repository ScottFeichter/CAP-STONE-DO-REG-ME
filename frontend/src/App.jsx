// import React from "react";
import LoginForm from "./components/session/LoginFormPage/LoginForm.jsx"

function App() {
  // console.log("APP COMPONENT RAN");
  // return <RouterProvider router={router} />;
  return (
        <LoginForm />
  );

}

export default App;




// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { useState, useEffect } from "react";

// import Navigation from './store/components/Navigation';
// import { Outlet } from "react-router-dom";

// import { useState } from 'react'

// function Layout() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(()=> {
//     dispatch(sessionActions.restoreUser()).then(()=> {
//       setIsLoaded(true)
//     });
//   }, [dispatch]);

//   dispatch(spotsActions.search());

//   useEffect(()=> {

//     async () => {
//     //  console.log("DISPATCH LINE 21 LAYOUT.jsx");
//      return dispatch(spotsActions.search());
//     }

//    },[dispatch])



//   // console.log("LAYOUT COMPONENT RAN");
//   return (<>
//     <Navigation isLoaded={isLoaded} />
//     {isLoaded && <Outlet />}
//   </>)
// }



// const router = createBrowserRouter([
// {
//   element: <Layout />,
//   children: [
//     {
//       path: '/',
//       element: <SearchResults />,
//     },
//     {
//       path: '/spots/manage',
//       element: <UserSpotManagement  />,
//     },
//     {
//       path: '/spots/:spotId',
//       element: <SpotDetails  />
//     },
//     {
//       path: '/spots/new',
//       element: <CreateNewSpot  />
//     },
//     {
//       path: '/spots/:spotId/update',
//       element: <UpdateSpot />
//     },
//     {
//       path: '/spots/delete',
//       element: <DeleteSpotModal  />
//     },
//     {
//       path: '/spots/:spotId/reviews/new',
//       element: <CreateNewReviewModal  />
//     },
//   ]
// }
// ]);
