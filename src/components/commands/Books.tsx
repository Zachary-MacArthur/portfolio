import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";



const Books: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p>reading list:</p></EduIntro>
      <EduList>
        <p> <a className="desc" href="" target="_blank">2666: roberto bolano</a></p>
        <p> <a className="desc" href="" target="_blank">fanged numena</a></p>
        <p> <a className="desc" href="" target="_blank">the claw: gene wolfe</a></p>
        <p> <a className="desc" href="" target="_blank">new testament</a></p>
      </EduList>
    </Wrapper>
  );
};

export default Books;
