import Nav from "../components/Nav";
import { styled } from "styled-components";
import tripTalk from "../assets/트립토크.jpeg";
import film from "../assets/필름.jpeg";
import weather from "../assets/날씨웹.jpg";
import { Link } from "react-router-dom";
const ProjectPage = () => {
  return (
    <Container>
      <Nav />
      <HomeWrap>
        <div className="text-wrap">
          <p className="text-top">PROJECTS</p>
          <p className="text-bt">팀프로젝트와 개인프로젝트</p>
        </div>
        <ProjectWrap>
          <Project>
            <StyleLink to={`/project/1`}>
              <ImgWrap>
                <Img src={tripTalk} alt="트립토크썸네일" />
              </ImgWrap>
              <TextWrap>
                <p>Trip-Talk</p>
                <span>WEB</span>
              </TextWrap>
            </StyleLink>
          </Project>
          <Project>
            <StyleLink to={`/project/2`}>
              <ImgWrap>
                <Img src={film} alt="film썸네일" />
              </ImgWrap>
              <TextWrap>
                <p>Film</p>
                <span>WEB</span>
              </TextWrap>
            </StyleLink>
          </Project>
          <Project>
            <StyleLink to={`/project/3`}>
              <ImgWrap>
                <Img src={weather} alt="날씨웹 썸네일" />
              </ImgWrap>
              <TextWrap>
                <p>Weather</p>
                <span>WEB</span>
              </TextWrap>
            </StyleLink>
          </Project>
        </ProjectWrap>
      </HomeWrap>
    </Container>
  );
};
export default ProjectPage;

const Container = styled.div`
  width: 1045px;
  display: flex;
  margin: 0 auto;
  margin-top: 72px;
`;

const HomeWrap = styled.div`
  width: 855px;
  .text-wrap {
    p {
      color: #f8f4d7;
    }
    .text-top {
      font-size: 32px;
    }
    .text-bt {
      font-size: 24px;
    }
  }
`;
const ProjectWrap = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const Project = styled.div``;
const ImgWrap = styled.div`
  cursor: pointer;
`;
const Img = styled.img``;
const TextWrap = styled.div`
  color: #bd42e9;
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
  cursor: pointer;

  span {
    display: flex;
    width: 59px;
    height: 27px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #1e1d1d;
    margin-top: 16px;
  }
`;
