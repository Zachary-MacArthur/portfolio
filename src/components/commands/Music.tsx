import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";


const Music: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p>personal discography</p></EduIntro>
      <EduList>
        <p> <a className="desc" href="https://motionward.bandcamp.com/album/baby-with-a-halo" target="_blank">ura, baby with a halo, 2022</a></p>
        <p> <a className="desc" href="https://uramusic.bandcamp.com/album/blue" target="_blank">ura, blue 2020</a></p>
        <p> <a className="desc" href="https://collect-call.bandcamp.com/album/entertainment" target="_blank">ura, entertainment 2019</a></p>
        <p> <a className="desc" href="https://soundcloud.com/unsignedrecordingartist" target="_blank">soundcloud</a></p>

      </EduList>
    </Wrapper>
  );
};

export default Music;
