import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";
import {
  Seperator,
} from "../styles/Welcome.styled";

const Help: React.FC = () => {
  return (
    <HelpWrapper data-testid="help">
       <Seperator>----</Seperator>
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>tab  {generateTabs(10)} <span>- autocompletes the command</span></div>
        <div>up arrow {generateTabs(5)} <span>- go back to previous command</span></div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
