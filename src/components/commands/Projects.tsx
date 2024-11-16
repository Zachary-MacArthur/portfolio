import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";


const Projects: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p>selected work</p></EduIntro>
      <EduList>
        <p> <a className="desc" href="" target="_blank">self-hosted media player ~ coming soon</a></p>
        <p> <a className="desc" href="https://blog-q1a5.onrender.com/" target="_blank">personal blog</a></p>
        <p> <a className="desc" href="https://github.com/Zachary-MacArthur/SuperCollider" target="_blank">super collider patches</a></p>
        <p> <a className="desc" href="https://cure-005.netlify.app/" target="_blank">cure 005 </a></p>

      </EduList>
    </Wrapper>
  );
};

export default Projects;
