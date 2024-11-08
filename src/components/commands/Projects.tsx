import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";


const Projects: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p>selected work</p></EduIntro>
      <EduList>
        <p> <a className="desc" href="" target="_blank">coming soon</a></p>
      </EduList>
    </Wrapper>
  );
};

export default Projects;
