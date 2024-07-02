import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <h1 className="fst-italic">Click here to add User information!</h1>
        <Link to="/user">
          <Button type="button" className="btn bg-dark mt-3">
            Add User Information
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
