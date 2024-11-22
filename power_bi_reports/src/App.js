import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/login";
import PowerBIEmbedComponent from "./components/PowerBIEmbedComponent";
import SignUp from "./components/register";
import Profile from "./components/profile";
import HomePage from "./components/homePage";
import MyNavbar from "./components/navbar"; // Import the Navbar component

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []); // Add an empty dependency array to prevent multiple subscriptions

  return (
    <Router>
      <div className="App">
        {/* Conditionally render Navbar only if the user is not logged in */}
        {!user && <MyNavbar />}
        <Routes>{/* Route for Info outside the wrapper */}</Routes>
        <div>
          {/* <div className="auth-inner"> */}
          <Routes>
            {/* Set Home component as the default page */}
            <Route path="/" element={<HomePage />} />

            {/* Other routes */}
            <Route
              path="/login"
              element={user ? <Navigate to="/profile" /> : <Login />}
            />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
