import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";

const Email: React.FC = () => {
  return (
    <Wrapper>
  <EduIntro></EduIntro>
  <EduList>
              <a href="mailto:info@zachary-macarthur.com" className ="desc">info@zachary-macarthur.com</a>
    </EduList>
    </Wrapper>
      
  );
};

export default Email;
