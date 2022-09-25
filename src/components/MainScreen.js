import styled from "styled-components";
import { BsLightbulbOffFill } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import Header from "./Header";
import HomeDisplay from "./HomeDisplay";
import ShortBlurb from "./ShortBlurb";
import DownArrow from "./DownArrow";
import ProjectCard from "./ProjectCard";
import MarkhamTrails from "./assets/trailsmockup.png";
import BattleShip from "./assets/battleship.png";
import WolfPackApp from "./assets/wpa.png";
import Boink from "./assets/boink.png";
import KiwiiMenu from "./assets/kiwimenu.png";
import "./css/HomeDisplay.css";


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
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};

  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
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
  }

  const icon =
    props.theme === "light" ? (
      <BsLightbulb size={20} />
    ) : (
      <BsLightbulbOffFill size={20} />
    );

  return (
    // <Page>
    <div>
      <Container>
        <Header></Header>
      </Container>
      <HomeDisplay></HomeDisplay>
      <ShortBlurb></ShortBlurb>
      <DownArrow></DownArrow>
      <ProjectCard
        imgsrc={MarkhamTrails}
        projectName="Markham Trails"
        tagLine="Cross Platform Mobile App"
        iOS = "#"
        android = "#"
        web = "/"
        description = "Markham Trails is a Flutter application developed for informational and entertaining hiking trails in Markham. Equipped with Google Maps API and location tracking, the user can enjoy audio recordings and interesting facts about different landmarks they are close to. This is a project in direct collaboration with the City of Markham and Markham Public Library."
        technologies = "Flutter Dart Geolocation"
      ></ProjectCard>
      <ProjectCard
        imgsrc={KiwiiMenu}
        projectName="Kiwii Menu"
        tagLine="Virtual Menu Services Startup"
        iOS = "/"
        android = "/"
        web = "daonsushi.ca"
        description = "Kiwii Menu is a small startup aiming to create virtual menus for restuarants in Markham."
        technologies = "Flutter Dart Firebase"
      ></ProjectCard>
      <ProjectCard
        imgsrc={WolfPackApp}
        projectName="wolfpackapp"
        tagLine="Cross Platform Mobile App"
        iOS = "https://apps.apple.com/ca/app/wolfpackapp/id1602012389"
        android = "https://play.google.com/store/apps/details?id=com.doriansarina.wolfpackapp"
        web = "/"
        description = "wolfpackapp is designed to be a one-stop-shop for all student to get their daily info at a glance. With quick access to links, built in calendars, and live announcements, wolfpackapp will help students stay up to date on all important info. wolfpackapp was YRDSB approved and made the official mobile app of Unionville High School."
        technologies = "Flutter Firebase Dart"
      ></ProjectCard>
      <ProjectCard
        imgsrc={Boink}
        projectName="Bo!nk"
        tagLine="iOS Mobile Game"
        iOS = "https://apps.apple.com/gb/app/bo-nk/id1570376501"
        android = "/"
        web = "https://mssapp.dev/boinksite/index.html"
        description = "Bo!nk, is a drawing-based puzzle game that challenges the player to draw lines and direct balls into holes. It features a cartoonish art style, multiple levels, sound effects and many other mechanics. It was made in Unity and released on App Store for download."
        technologies = "Unity C#"
      ></ProjectCard>
      <ProjectCard
        imgsrc={BattleShip}
        projectName="Battleship"
        tagLine="Java Game"
        iOS = "/"
        android = "/"
        web = "https://github.com/Jiaan124/Battleship"
        description = "Coded using native Java, it includes fully functional Ai opponent, player vs Ai Mode (Hard and Easy!), graphical user interface, terminal based game, music and SFX and file saving, reload past saved games. Made for my ICS4U class, I created it with my partners, Vivien Cai and Jiaan Li."
        technologies = "Java"
      ></ProjectCard>
      
    </div>
  );
}

export default MainScreen;
