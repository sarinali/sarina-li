import "./css/Header.css";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;

  width: 100%
`;

const HeaderItemContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 5%;
`;

const HeaderItemText = styled.a`
  color: ${props => props.theme.tagLineColor};
  transition: color 0.2s ease-in-out;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.titleColor};
  }
`;

function Header() {
  return (
    <HeaderContainer>
        <HeaderItemContainer>
          <HeaderItemText href="#">LinkedIn</HeaderItemText>
        </HeaderItemContainer>
        <HeaderItemContainer>
          <HeaderItemText href="#">Instagram</HeaderItemText>
        </HeaderItemContainer>
        <HeaderItemContainer>
        <HeaderItemText href="#">Resume</HeaderItemText>
        </HeaderItemContainer>
    </HeaderContainer>
  );
}

export default Header;
