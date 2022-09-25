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
          <HeaderItemText href="https://www.linkedin.com/in/sarinali/">LinkedIn</HeaderItemText>
        </HeaderItemContainer>
        <HeaderItemContainer>
          <HeaderItemText href="https://www.instagram.com/sarina.li_/">Instagram</HeaderItemText>
        </HeaderItemContainer>
        <HeaderItemContainer>
        <HeaderItemText href="https://docs.google.com/document/d/1xcm1_6RKUIltCYXJj37xoyrBq-EhCZ1ssYryM6e2us8/edit?usp=sharing">Resume</HeaderItemText>
        </HeaderItemContainer>
    </HeaderContainer>
  );
}

export default Header;
