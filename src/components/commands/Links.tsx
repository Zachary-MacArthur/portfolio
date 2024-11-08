import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";



const Projects: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p>connect with me:</p></EduIntro>
      <EduList>
        <p> <a className="desc" href="https://github.com/Zachary-MacArthur" target="_blank">github</a></p>
        <p> <a className="desc" href="https://www.linkedin.com/in/zachary-macarthur/" target="_blank">linkedin</a></p>
        <p> <a className="desc" href="https://x.com/9820174750a" target="_blank">twitter</a></p>
        <p> <a className="desc" href="https://drive.google.com/file/d/1zPJWYVVBLXUOAbIYgIVKHHr3nnjGZ33l/view?usp=sharing" target="_blank">cv</a></p>
      </EduList>
    </Wrapper>
  );
};

export default Projects;
