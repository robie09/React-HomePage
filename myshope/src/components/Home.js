import "../App.css";
import cakeimage from "../images/cake.jpg";
import { Title, Description, Imagestyle } from "../style";

const Home = () => {
  return (
    <div>
      <Title>Sweet cake</Title>

      <Description>
        There are many different types of cake. Coman to try it.
      </Description>

      <Imagestyle src={cakeimage} alt="shop" />
    </div>
  );
};

export default Home;
