import { styled } from "styled-components";
import photo from "../assets/증명사진.jpeg";

const TopContent = () => {
  return (
    <Container>
      <TopWrap>
        <ImgWrap>
          <Img src={photo} alt="" />
        </ImgWrap>
        <TextWrap>
          <p>박진</p>
          <p>2000.01.15</p>
          <p>
            안녕하세요. 개발과 지식의 성장을 끈기있게 즐기는 개발자 박진입니다.
            <br /> 2024년 3월 방송통신대학교 컴퓨터과학과에 입학하여
            재학중입니다.
          </p>
        </TextWrap>
      </TopWrap>
    </Container>
  );
};

export default TopContent;

const Container = styled.div`
  p {
    font-size: 24px;
    color: #ffff;
    font-weight: bold;
  }
`;
const TopWrap = styled.div`
  width: 855px;
  display: flex;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 25px;
  gap: 36px;
  border-bottom: 1px solid #ffff;
`;
const ImgWrap = styled.div`
  width: 138px;
  height: 138px;
  border-radius: 69px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 69px;
`;
const TextWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  p:last-child {
    font-size: 20px;
  }
`;
