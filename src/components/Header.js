import "./css/Header.css";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 5%
`;

const HeaderItemContainer = styled.div`
  display: flex;
  margin: 5%;
  color: red;
`;

function Header() {
  return (
    <HeaderContainer>
      {/* <div className="toggledisplaymode"></div> */}
        <HeaderItemContainer>
          <a href="#">Home</a>
        </HeaderItemContainer>
        <HeaderItemContainer>
          <a href="#">Experience</a>
        </HeaderItemContainer>
        <HeaderItemContainer>
        <a href="#">Portfolio</a>
        </HeaderItemContainer>
        <HeaderItemContainer>
        <a href="#">Contact</a>
        </HeaderItemContainer> 
    </HeaderContainer>
  );
}

export default Header;
