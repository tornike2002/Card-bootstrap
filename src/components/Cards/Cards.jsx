import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { RiCheckboxCircleLine } from "react-icons/ri";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa6";

const Cards = () => {
  const users = useSelector((state) => state.users.value);

  const socialMediaIcons = {
    Instagram: <FaInstagram className="text-white" />,
    Facebook: <FaFacebookF className="text-white" />,
    Twitter: <FaTwitter className="text-white" />,
    Discord: <FaDiscord className="text-white" />,
  };
  const getIconComponent = (url) => {
    if (url.includes("instagram")) return socialMediaIcons.Instagram;
    if (url.includes("facebook")) return socialMediaIcons.Facebook;
    if (url.includes("twitter")) return socialMediaIcons.Twitter;
    if (url.includes("discord")) return socialMediaIcons.Discord;
    return null;
  };

  return (
    <Container>
      <Row>
        {users.map((user, index) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="d-flex justify-content-center"
          >
            <div className="card w-100 d-flex justify-content-center align-items-center flex-column mt-5 bg-dark text-white p-3">
              <img
                src={logo}
                alt="logo"
                width={120}
                height={120}
                className="mt-3"
              />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex align-items-center gap-2">
                  <h2>{user.name}</h2>
                  <RiCheckboxCircleLine
                    style={{ color: "cyan", fontSize: "20px" }}
                  />
                </div>
                <p>{user.profession}</p>
              </div>

              <div className="d-flex flex-column gap-1 w-100">
                {user.services.map((service, index) => (
                  <button
                    className="pt-1 pb-1 rounded-2 border-0 bg-secondary text-white"
                    key={index}
                  >
                    {service}
                  </button>
                ))}
              </div>

              <div className="d-flex gap-2 mt-3">
                {user.socialMedia.map((social, index) => (
                  <a
                    href={`https://${social}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    {getIconComponent(social)}
                  </a>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
