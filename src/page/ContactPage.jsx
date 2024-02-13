import styled from "styled-components";
import Nav from "../components/Nav";
import mailIcon from "../assets/mail.svg";
import githubIcon from "../assets/github.svg";
const ContactPage = () => {
  return (
    <Container>
      <Nav />
      <ContactWrap>
        <h1>CONTACT</h1>
        <ItemBox>
          <TextWrap>
            <p>
              프론트엔드 개발의 길을 택하며 전공을 바꾸는 일은 어려웠지만,
              <br />
              BENJAMIN FRANKLIN의 말처럼 '성공의 비밀은 목표를 향한 끈기 있는
              <br />
              노력에 있다'는 이 한 마디가 저의 인생의 지침이 되었습니다. 어떤
              <br />
              어려움이든 강한 의지와 끈기로 극복하며, 포기하지 않고 목표를 향해
              <br />
              나아가는 모습을 끝까지 보여주겠습니다. 이 길은 어렵겠지만, 끝에는
              <br />큰 성취가 기다리고 있을 것이라 믿습니다.
            </p>
          </TextWrap>
          <IconWrap>
            <div>
              <p>메일보내기</p>
              <a href="mailto:parkjin0115@naver.com">
                <img src={mailIcon} alt="메일 아이콘" />
              </a>
            </div>
            <div>
              <p>github</p>
              <a href="https://github.com/jin-park0115">
                <img src={githubIcon} alt="깃허브 아이콘" />
              </a>
            </div>
          </IconWrap>
        </ItemBox>
      </ContactWrap>
    </Container>
  );
};

export default ContactPage;

const Container = styled.div`
  width: 1045px;
  display: flex;
  margin: 0 auto;
  margin-top: 72px;
`;

const ContactWrap = styled.div`
  width: 855px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  h1 {
    font-size: 32px;
    color: #f8f4d7;
  }
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;
const TextWrap = styled.div`
  color: #f8f4d7;
  background-color: #bd42e9;
  border-radius: 10px;
  padding: 20px 10px;
`;
const IconWrap = styled.div`
  display: flex;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    color: #f8f4d7;
  }
  img {
    height: 50px;
  }
`;
