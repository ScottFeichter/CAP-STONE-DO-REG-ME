import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home/Home.jsx";
import ProfilePage from "../components/Profile/ProfilePage.jsx";
import Resources from "../components/Resources/Resources.jsx";
import Departments from "../components/Departments/Departments.jsx";
import Students from "../components/Students/Students.jsx";
import Employees from "../components/Employees/Employees.jsx";
import CreateNewEmployeeForm from "../components/Employees/createNewEmployeeForm/createNewEmployeeForm.jsx";
import EditEmployeeForm from "../components/Employees/EditEmployeeForm/EditEmployeeForm.jsx";
import EmployeeDetailPage from "../components/Employees/EmployeeDetailsPage/EmployeeDetailsPage.jsx";
import EmployeeDetails from "../components/Employees/EmployeeDetailsPage/EmployeeDetails.jsx";



// import ListStocks from "../components/ListStocks/ListStocks.jsx"
// import { initialLoader } from "../components/_Loaders/InitialLoader/initialLoader.js";
// import { modifyPortfolio } from "../components/actions/portfolios";

// import { watchlistLoader } from "../components/loaders/watchLists";
// import Watchlist from "../components/Watchlist/Watchlist";
// import { deleteWatchlist } from "../components/actions/watchLists";
// import WatchlistAll from "../components/Watchlist/WatchlistUser_All";

// import SearchResults from "../components/Navigation/SearchResults/SearchResults.jsx";
// import { navStocksLoader } from "../components/loaders/navStocksLoader.js";

// import UpdateProfileModal from "../components/Profile/UpdateProfileModal.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/resources",
          element: <Resources />,
        },
        {
          path: "/departments",
          element: <Departments />
        },
        {
          path: "/students",
          element: <Students />
        },
        {
          path: "/employees",
          element: <Employees />
        },
        {
          path: "/employees/:employeeId",
          element: <EmployeeDetailPage />
        },
        {
          path: "/createNewEmployeeForm/",
          // loader: listStocksLoader,
          element: <CreateNewEmployeeForm />,
        },
        {
          path: "/editEmployeeForm/",
          // loader: listStocksLoader,
          element: <EditEmployeeForm />,
        },
        {
        path: "/temp",
        // loader: listStocksLoader,
        element: <EmployeeDetails />,
      },



    // =============FROM RAVENWOOD=============


    //   {
    //     path: "/",
    //     loader: userPortfolios,
    //     element: <HomePage />,
    //   },
    //   {
    //     path: "profile/portfolios",
    //     loader: userPortfolios,
    //     element: <UserProfilePage />,
    //     action: modifyPortfolio,
    //     children: [
    //       {
    //         path: "edit",
    //         element: <UpdateProfileModal />,
    //       },
    //     ],
    //   },
    //   {
    //     path: "portfolios/new",
    //     loader: userPortfolios,
    //     element: <CreatePortfolio />,
    //     action: createPortfolioAction,
    //   },
    //   {
    //     path: "portfolios/:userId",
    //     loader: userPortfolios,
    //     element: <PortfolioDetails />,
    //     action: modifyPortfolio,
    //   },
    //   {
    //     path: "portfolios/:userId/edit",
    //     loader: userPortfolios,
    //     element: <UpdatePortfolio />,
    //     action: updatePortfolioAction,
    //   },
    //   {
    //     path: "portfolios/:userId/edit/cash",
    //     loader: userPortfolios,
    //     element: <UpdatePortfolio />,
    //     action: updatePortfolioAction,
    //   },
    //   {
    //     path: "watchlist/:watchlist_num",
    //     loader: watchlistLoader,
    //     element: <Watchlist />,
    //     action: deleteWatchlist,
    //   },
    //   {
    //     path: "watchlist",
    //     element: <WatchlistAll />,
    //     loader: watchlistLoader,
    //     action: deleteWatchlist,
    //   },


      // =============CATCH ALL=============

      {
        path: "*",
        element: (
          <div>
            <h1>404 Page not found</h1>
            <p>
              Not all those who wander are lost, but it seems you may have taken
              a wrong turn.
            </p>
          </div>
        ),
      },
    ],
  },
]);
