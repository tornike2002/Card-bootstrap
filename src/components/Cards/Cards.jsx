import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.webp";
const Cards = () => {
  const users = useSelector((state) => state.users.value);
  return (
    <Container>
      {users.map((user, index) => (
        <div key={index} className="card">
          <img src={logo} alt="logo" width={120} height={120} />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <h3>Services</h3>
          <ul>
            {user.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h3>Social Media</h3>
          <ul>
            {user.socialMedia.map((social, index) => (
              <li key={index}>{social}</li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default Cards;
