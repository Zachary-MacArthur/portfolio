import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";


const Cv: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p></p></EduIntro>
      <EduList>
        <p> <a className="desc" href="https://drive.google.com/file/d/1zPJWYVVBLXUOAbIYgIVKHHr3nnjGZ33l/view?usp=sharing" target="_blank">curriculum vitae pdf</a></p>
       
      </EduList>
    </Wrapper>
  );
};

export default Cv;
