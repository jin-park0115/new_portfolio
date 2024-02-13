import styled, { keyframes } from "styled-components";
import ExpandMore from "../assets/아래화살표.svg";
const Header = () => {
  return (
    <>
      <Head>
        <HeadWrap>
          <HeadT>
            <p>Front-End Devleoper</p>
          </HeadT>
          <HeadB>
            <p>JIN</p>
            <p>PORTFOLIO</p>
          </HeadB>
        </HeadWrap>
        <ImgWrap>
          <img src={ExpandMore} alt="아래보는 화살표" />
        </ImgWrap>
      </Head>
    </>
  );
};

export default Header;

const Head = styled.div`
  width: 1120px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 153px;
  color: #f8f4d7;
`;
const HeadWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 600px;
`;

const HeadT = styled.div`
  width: 312px;
  p {
    font-weight: bold;
    font-size: 32px;
    border-bottom: 1px solid #f8f4d7;
  }
`;
const HeadB = styled.div`
  color: #fffdfd;
  p {
    font-size: 40px;
  }
`;

const fadin = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    opacity: 0;
    height: 100px;
    animation: ${fadin} 2.5s ease-in-out infinite;
  }
`;
