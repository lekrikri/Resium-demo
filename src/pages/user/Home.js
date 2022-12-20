import React from "react";
import { Background } from "../../GlobalStyles";
import {
  MainContainer,
  Container,
  Text,
  HomeBackground,
  BtnWorkspace,
  UserContainer,
} from "../../components/home/Home.styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Background>
      <HomeBackground>
        <MainContainer />
        <UserContainer
          mail="ganou.christophe@gmail.com"
          fullname="Christophe Ganou"
        />
        <Container>
          <Text>
            Welcome, massa commodo sem mauris, nunc ridiculus lectus platea. .
          </Text>
          <Link to="/Workspace" style={{ textDecoration: "none" }}>
            <BtnWorkspace />
          </Link>
        </Container>
      </HomeBackground>
    </Background>
  );
};

export default Home;
