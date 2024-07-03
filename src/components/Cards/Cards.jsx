import { useSelector } from "react-redux";

const Cards = () => {
  const users = useSelector((state) => state.users.value);
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="card">
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
    </div>
  );
};

export default Cards;
