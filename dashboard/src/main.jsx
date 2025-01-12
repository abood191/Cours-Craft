import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./login";
import Dashboard from "./Page/dashboards/Dashboard";
import Team from "./Page/team/Team";
import Contacts from "./Page/contacts/Contacts";
import Profile from "./Page/profiles/profile";
import Invoices from "./Page/invoices/Invoices";
import BarChart from "./Page/bar_chart/bar";
import Linechart from "./Page/lineChart/LineChart";
import Faq from "./Page/faq/Faq";
import Calendar from "./Page/calendar/Calendar";
import PieChart from "./Page/piechart/Piechart";
import Add from "./Page/add_money/add_data";

// Function to check if the user is logged in
function isLoggedIn() {
  return !!localStorage.getItem("email");
}

const router = createBrowserRouter(
  isLoggedIn()
    ? [
        {
          path: "/",
          element: <App />,
          children: [
            { path: "/", element: <Dashboard /> },
            { path: "team", element: <Team /> },
            { path: "contacts", element: <Contacts /> },
            { path: "Users", element: <Profile /> },
            { path: "invoices", element: <Invoices /> },
            { path: "BarChart", element: <BarChart /> },
            { path: "LineChart", element: <Linechart /> },
            { path: "FAQ", element: <Faq /> },
            { path: "Add", element: <Add /> },
            { path: "Calendar", element: <Calendar /> },
            { path: "PieChart", element: <PieChart /> },
          ],
        },
      ]
    : [
        {
          path: "/",
          element: <Login />,
        },
      ]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
