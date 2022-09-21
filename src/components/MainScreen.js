

import styled from "styled-components";
import { BsLightbulbOffFill } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import Header from "./Header";
import HomeDisplay from "./HomeDisplay";
import ShortBlurb from "./ShortBlurb";
 
const Toggle = styled.button`
    margin: 5%;
    padding: 10px;
    cursor: pointer;
    height: 40px;
    width: 40px;   
    border: none;
    border-radius: 10%;
    align-items: center;
    display: flex;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};

    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Container = styled.div`
    width: 100%;
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


function MainScreen(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <BsLightbulb size={20} /> : <BsLightbulbOffFill size={20} />;

    return (
        // <Page>
        <div>
            <Container>
                {/* <Toggle onClick={changeTheme}> */}
                {/* <Toggle>
                    {icon}
                </Toggle> */}
                <Header></Header>
            </Container>
            <HomeDisplay></HomeDisplay>
            <ShortBlurb></ShortBlurb>
        {/* </Page> */}
        </div>
    );
};

export default MainScreen;