import { HeaderContainer, LogoName } from "./styles";

const Header: React.FC = () => (
  <HeaderContainer>
    <div>
      <LogoName>
        PEDROWA<span>NDE</span>
        <span className="second-span">RLEY</span>
      </LogoName>
    </div>
    <div>
      <p>Fale comigo =</p>
    </div>
  </HeaderContainer>
);

export default Header;
