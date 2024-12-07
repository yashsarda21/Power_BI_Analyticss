import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import PowerBIEmbedComponent from "./PowerBIEmbedComponent";
import Register from "./register"; // Assuming this is your Register component
import "./../index.css";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [isSpecialUser, setIsSpecialUser] = useState(false);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserDetails(data);

          // Check if the user is a special user
          if (
            user.email === "yashsarda2002@gmail.com" ||
            user.email === "sarveshtoshniwal@gmail.com"
          ) {
            setIsSpecialUser(true);
          }
        } else {
          console.log("User document does not exist.");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        isSpecialUser ? (
          <Register />
        ) : (
          <div>
            <h1 className="userName">{userDetails.firstName} DashBoard</h1>
            {/* <iframe
              className="reports"
              src={userDetails.reportName}
              allowFullScreen="true"
            ></iframe> */}
            <PowerBIEmbedComponent></PowerBIEmbedComponent>
            {/* <Button variant="primary" onClick={handleLogout} className="mt-3">
              Logout
            </Button> */}
          </div>
        )
      ) : (
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner animation="border" />
          </Col>
        </Row>
      )}
      <Button variant="primary" onClick={handleLogout} className="mt-3">
        Logout
      </Button>
    </div>
  );
}

export default Profile;
