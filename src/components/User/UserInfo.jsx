import React from "react";
import { Container } from "react-bootstrap";

const UserInfo = () => {
  return (
    <section>
      <Container>
        <form className="mt-5">
          <label>Name & Proffesion</label>
          <div className="name-proffesion d-flex flex-column w-25 gap-3">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Proffesion" />
          </div>
          <label className="mt-3">Services</label>
          <div className="jobs d-flex flex-column w-25 gap-3">
            <input type="text" placeholder="Services 1" />
            <input type="text" placeholder="Services 2" />
            <input type="text" placeholder="Services 3" />
            <input type="text" placeholder="Services 4" />
          </div>
          <label className="mt-3">Social Media</label>
          <div className="social d-flex flex-column w-25 gap-3">
            <input type="text" placeholder="Instagram" />
            <input type="text" placeholder="Facebook" />
            <input type="text" placeholder="Twitter" />
            <input type="text" placeholder="Discord" />
          </div>
          <button type="submit" className="btn mt-3 border border-1 bg-danger">Submit</button>
        </form>
      </Container>
    </section>
  );
};

export default UserInfo;
