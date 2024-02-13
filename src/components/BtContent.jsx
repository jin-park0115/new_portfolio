import styled from "styled-components";

const BtContent = () => {
  return (
    <Container>
      <h2>EDUCATION</h2>
      <TitleWrap>
        <Title>한국방송통신대학교</Title>
        <div className="subTitle">
          <p>컴퓨터과학과</p>
          <p>2024년 입학 - 재학중</p>
        </div>
      </TitleWrap>
      <TitleWrap>
        <Title>서영대학교-파주</Title>
        <div className="subTitle">
          <p>호텔외식조리학과</p>
          <p>2018년 입학 - 2022년 졸업</p>
        </div>
      </TitleWrap>
    </Container>
  );
};

export default BtContent;

const Container = styled.div`
  width: 855px;
  margin: 0 auto;
  margin-top: 24px;
  padding-bottom: 30px;
  h2 {
    font-size: 32px;
    color: #fffdfd;
  }
`;
const TitleWrap = styled.div`
  width: 314px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  .subTitle {
    width: 155px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }
`;
const Title = styled.p`
  font-weight: bold;
  color: #f8f4d7;
`;
