import React from "react";
import { H3 } from "@blueprintjs/core";
import styled from "styled-components/macro";
import theme from "../theme/theme.module.scss";
import { TechnologyList } from "../components/Technologies/TechnologyList";
import { ProjectList } from "../components/Projects/ProjectList";
import meImg from "../assets/me.png";

export const Home: React.FC<{}> = () => {
  return (
    <main>
      {/* <Title>Yarin Sasson</Title> */}
      <TitleContainer>
        <div>
          <Title>Fullstack Developer</Title>
          <Title>& Graphic Designer</Title>
        </div>

        <ProfilePic src={meImg} />
      </TitleContainer>
      <Paragraph>
        "I like to code things from scratch, and enjoy bringing ideas to life.
        Clean Code, Clean Design and thoughtful interactions"
      </Paragraph>
      <TechnologyListContainer>
        <TechnologyList />
      </TechnologyListContainer>
      <FeaturedTitle>My Recent Projects</FeaturedTitle>
      <ProjectList limit={4} />
    </main>
  );
};

const Title = styled.h1`
  font-weight: 100;
  margin: 0;
  font-size: 38px;
  font-family: SF-Pro-Rounded;
  &:nth-of-type(2) {
    padding-left: 40px;
  }
`;

const ProfilePic = styled.img`
  height: 200px;
  width: auto;
  margin-right: 10vw;
  @media only screen and (max-width: ${theme.tabletScreen}) {
    margin: auto;
    margin-top: 30px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Paragraph = styled.p`
  font-family: New-York;
  color: ${theme.primaryColor};
  font-size: 30px;
  margin: 0;
  font-style: italic;
  text-align: center;
  padding: 20px;
  opacity: 0.8;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const FeaturedTitle = styled(H3)`
  margin: 20px 0 15px 0;
  line-height: unset;
`;

const TechnologyListContainer = styled.div`
  > :first-child {
    justify-content: center;
  }
`;
