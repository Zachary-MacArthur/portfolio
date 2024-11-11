import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { EduIntro, EduList } from "../styles/Education.styled";



const Books: React.FC = () => {
  return (
    <Wrapper>
      <EduIntro>  <p>reading list:</p></EduIntro>
      <EduList>
        <p> <a className="desc" href="https://www.amazon.com/Hypersea-Life-Mark-S-McMenamin/dp/0231075316" target="_blank">hypersea: life on land</a></p>
        <p> <a className="desc" href="https://punctumbooks.com/titles/leper-creativity-cyclonopedia-symposium/" target="_blank">Leper Creativity: Cyclonopedia Symposium</a></p>
        <p> <a className="desc" href="https://www.goodreads.com/book/show/60215.The_Urth_of_the_New_Sun" target="_blank">urth of the new sun, gene wolfe</a></p>
        <p> <a className="desc" href="https://www.holybooks.com/wp-content/uploads/2010/05/The-Holy-Bible-King-James-Version.pdf" target="_blank">the new testament</a></p>
        <p> <a className="desc" href="https://www.lespressesdureel.com/EN/ouvrage.php?id=3571" target="_blank">in the canyon, revise the canon</a></p>
        <p> <a className="desc" href="https://www.gutenberg.org/files/36098/36098-h/36098-h.htm" target="_blank">the flowers of evil, baudelaire</a></p>
        <p> <a className="desc" href="https://www.jstor.org/stable/j.ctv19cwdrc" target="_blank">speculative medievalisms</a></p>
        <p> <a className="desc" href="https://www.amazon.ca/Intelligence-Evil-Lucidity-Pact/dp/1780935684" target="_blank">the intelligence of evil, baudrillard</a></p>
        <p> <a className="desc" href="https://www.goodreads.com/en/book/show/378440" target="_blank">in the freud archives, janet malcolm</a></p>
        <p> <a className="desc" href="https://www.amazon.ca/Herzog-Paul-Cronin-Werner/dp/0571207081" target="_blank">herzog on herzog</a></p>
        <p> <a className="desc" href="https://archive.org/details/either-or-part-1-kierkegaards-writings_compress" target="_blank">either/or, kierkegaard</a></p>
        <p> <a className="desc" href="https://www.amazon.ca/2666-Novel-Roberto-Bola%C3%B1o/dp/0312429215" target="_blank">2666, roberto bolano</a></p>

      </EduList>
    </Wrapper>
  );
};

export default Books;
