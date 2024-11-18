import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";


const Cv: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p></p></EduIntro>
      <EduList>
        <p> <a className="desc" href="https://drive.google.com/file/d/1xn5ZHxJ8P27_8DTDhamNBnp5dksUhzx7/view?usp=sharing" target="_blank">curriculum vitae pdf</a></p>
       
      </EduList>
    </Wrapper>
  );
};

export default Cv;
