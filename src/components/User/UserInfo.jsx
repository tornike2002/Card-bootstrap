import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../../../features/UserInfoSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    services: ["", "", "", ""],
    socialMedia: ["", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData({ ...formData, services: newServices });
  };

  const handleSocialMediaChange = (index, value) => {
    const newSocialMedia = [...formData.socialMedia];
    newSocialMedia[index] = value;
    setFormData({ ...formData, socialMedia: newSocialMedia });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    // Reset form after submission
    setFormData({
      name: "",
      profession: "",
      services: ["", "", "", ""],
      socialMedia: ["", "", "", ""],
    });
  };

  return (
    <section>
      <Container>
        <form className="mt-5" onSubmit={handleSubmit}>
          <label>Name & Profession</label>
          <div className="name-profession d-flex flex-column w-25 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
          <label className="mt-3">Services</label>
          <div className="jobs d-flex flex-column w-25 gap-3">
            {formData.services.map((service, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Services ${index + 1}`}
                value={service}
                onChange={(e) => handleServiceChange(index, e.target.value)}
              />
            ))}
          </div>
          <label className="mt-3">Social Media</label>
          <div className="social d-flex flex-column w-25 gap-3">
            {["Instagram", "Facebook", "Twitter", "Discord"].map((platform, index) => (
              <input
                key={index}
                type="text"
                placeholder={platform}
                value={formData.socialMedia[index]}
                onChange={(e) => handleSocialMediaChange(index, e.target.value)}
              />
            ))}
          </div>
          <button type="submit" className="btn mt-3 border border-1 bg-danger">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default UserInfo;
