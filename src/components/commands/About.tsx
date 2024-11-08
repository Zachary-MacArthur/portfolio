import {
  AboutWrapper,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        b 1992, vancouver bc
      </p>
      <p>
        lives and works in montreal qc
      </p>
      <p>
      sotware developer, musician, father, husband
      </p>
    
    </AboutWrapper>
  );
};

export default About;
