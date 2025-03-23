import { Banner } from "@/components/banner";
import CurationList from "@/components/curations/CurationList";
import Header from "@/components/Header";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Banner.Body />
      <CurationList />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100dvw;
`;
