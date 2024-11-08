import {
  Cmd,
  HeroContainer,
} from "../styles/Welcome.styled";

const Home: React.FC = () => {
  return (

    <HeroContainer data-testid="">
      <div className="info-section">
       <br />
        <div>
          enter a command or type <Cmd>help</Cmd>
        </div>
        </div>
    </HeroContainer>
  );
};

export default Home;
