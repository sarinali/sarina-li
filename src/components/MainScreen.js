import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Header from "./Header";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border: none;
    border-radius: 10%;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Container = styled.div`
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

// const Title = styled.h1`
//     color: ${props => props.theme.titleColor};
//     transition: all .5s ease;
// `;

// const TagLine = styled.span`
//     color: ${props => props.theme.tagLineColor};
//     font-size: 18px;
//     transition: all .5s ease;
// `;

function MainScreen(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        <Page>
            <Container>
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
                <Header></Header>
            </Container>
        </Page>
    );
};

export default MainScreen;