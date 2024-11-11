import {
  AboutWrapper,
} from "../styles/About.styled";
import { EduList } from "../styles/Education.styled";


const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <EduList>
      <p className="desc">
        b 1992, vancouver bc
      </p>
      <p className="desc">
        lives and works in montreal qc
      </p>
      <p className="desc">
      software developer, musician, father, husband
      </p>
      </EduList>
     
    </AboutWrapper>
  );
};

export default About;
