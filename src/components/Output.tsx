import About from "./commands/About";
import Clear from "./commands/Clear";
import Education from "./commands/Education";
import Email from "./commands/Email";
import Links from "./commands/Links";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import Home from "./commands/Home";
import History from "./commands/History";
import Books from "./commands/Books"
import Projects from "./commands/Projects";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";
import Music from "./commands/Music";
import Cv from "./commands/Cv";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          links: <Links />,
          education: <Education />,
          email: <Email />,
          info: <Help />,
          history: <History />,
          projects: <Projects />,
          home: <Home />,
          library: <Books />,
          music: <Music />,
          cv: <Cv />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
