import { useParams } from "react-router-dom";
import styled from "styled-components";
import projectData from "../data.json";
import ArrowBack from "../assets/back.svg";
import { Link } from "react-router-dom";
const DetailPage = () => {
  const { id } = useParams();
  const project = projectData.projects.find(
    (project) => project.id === parseInt(id)
  );
  console.log(project.image);
  return (
    <Container>
      <div className="box">
        <Back to={-1}>
          <img src={ArrowBack} alt="뒤로가기" />
        </Back>
        <div>
          <h1>PROJECT</h1>
          <p className="project-intro">{project["project-intro"]}</p>
        </div>

        <ImgWrap>
          <img src={project.image} alt="썸네일" />
        </ImgWrap>

        <TextWrap>
          <TextBox>
            <p>SKILLS</p>
            <span>{project.skills.join(" ")}</span>
          </TextBox>
          <TextBox>
            <p>진행기간</p>
            <span>{project.period}</span>
          </TextBox>
          <TextBox>
            <p>팀원</p>
            <span>{project.team}</span>
          </TextBox>
          <TextBox>
            <p>역할</p>
            <span>{project.role}</span>
          </TextBox>
          <TextBox>
            <p>기여도</p>
            <span>{project.contribution}</span>
          </TextBox>
          <TextBox>
            <p>링크</p>
            <a href={project.link[0]}>깃허브 주소</a>
          </TextBox>
        </TextWrap>
      </div>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 1045px;
  max-height: 200vh;
  margin: 0 auto;
  margin-top: 72px;
  color: #ffff;

  h1 {
    font-size: 32px;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 10px 20px 100px 20px;
  }
  .project-intro {
    font-size: 16px;
    font-weight: 200;
  }
`;
const ImgWrap = styled.div`
  width: 928px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
const TextBox = styled.div`
  display: flex;
  gap: 10px;
  font-size: 24px;
  span {
    font-weight: 200;
  }
  a {
    color: #ffff;
    font-weight: 200;
  }
`;
const Back = styled(Link)`
  img {
  }
`;
