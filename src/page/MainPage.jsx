import styled from "styled-components";
import BtContent from "../components/BtContent";
import MidContent from "../components/MidContent";
import Nav from "../components/Nav";
import TopContent from "../components/TopContent";
const MainPage = () => {
  return (
    <Container>
      <Nav />
      <HomeWrap>
        <TopContent />
        <MidContent />
        <BtContent />
      </HomeWrap>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 1045px;
  display: flex;
  margin: 0 auto;
  margin-top: 72px;
`;

const HomeWrap = styled.div`
  width: 100%;
`;
