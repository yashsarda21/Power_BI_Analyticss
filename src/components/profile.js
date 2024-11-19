import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import PowerBIEmbedComponent from "./PowerBIEmbedComponent";
import "./../index.css";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User is not logged in");
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
    // <div>
    //   <iframe
    //     className="reports"
    //     title="dummy_report"
    //     src={userDetails.reportName}
    //     frameborder="0"
    //     allowFullScreen="true"
    //   ></iframe>
    //   <Button variant="primary" onClick={handleLogout} className="mt-3">
    //     Logout
    //   </Button>
    // </div>
    <div>
      {/* <Info></Info> */}
      {userDetails ? (
        <div>
          <iframe
            className="reports"
            // title="dummy_report"
            src={userDetails.reportName}
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
          <Button variant="primary" onClick={handleLogout} className="mt-3">
            Logout
          </Button>
        </div>
      ) : (
        <Row className="justify-content-center">
          <Col xs="auto">
            <Spinner animation="border" />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Profile;
