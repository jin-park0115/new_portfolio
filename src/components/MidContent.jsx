import styled from "styled-components";
import reactIcon from "../assets/React-icon.svg";
import jsIcon from "../assets/JS-icon.svg";
import htmlIcon from "../assets/HTML-icon.svg";
import cssIcon from "../assets/CSS-icon.svg";
import styleIcon from "../assets/Styled-icon.svg";
import tsIcon from "../assets/TS-icon.svg";
import reduxIcon from "../assets/Redux-icon.svg";

const MidContent = () => {
  const highSkills = [
    { name: "React.js", icon: reactIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "Styled-Components", icon: styleIcon },
  ];
  const lowSkills = [
    { name: "TypeScript", icon: tsIcon },
    { name: "Redux Toolkit", icon: reduxIcon },
  ];
  return (
    <Container>
      <h2>SKILLS</h2>
      <HighWrap>
        <p>High</p>
        <HighSkillsWrap>
          {highSkills.map((skill, index) => (
            <li key={index}>
              <img src={skill.icon} alt={skill.name} />
              {skill.name}
            </li>
          ))}
        </HighSkillsWrap>
      </HighWrap>

      <MidWrap>
        <p>Middle</p>
        <MidSkillsWrap>
          <li>Axios</li>
        </MidSkillsWrap>
      </MidWrap>
      <LowWrap>
        <p>Low</p>
        <LowSkillsWrap>
          {lowSkills.map((skill, index) => (
            <li key={index}>
              <img src={skill.icon} alt={skill.name} />
              {skill.name}
            </li>
          ))}
        </LowSkillsWrap>
      </LowWrap>
    </Container>
  );
};

export default MidContent;

const Container = styled.div`
  width: 855px;
  margin: 0 auto;
  margin-top: 59px;
  border-bottom: 1px solid #ffff;

  h2 {
    color: #fffdfd;
    font-size: 32px;
  }
  ul {
    display: flex;
  }
  li {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 44px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0px 10px;
    color: #bd42e9;
    background-color: #1e1d1d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    transition: ease-in-out 0.3s;
  }
  li:hover {
    scale: 1.1;
  }
  p {
    font-size: 1rem;
    color: #f8f4d7;
  }
`;
const HighWrap = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
const HighSkillsWrap = styled.ul`
  gap: 10px;
`;
const MidWrap = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
const MidSkillsWrap = styled.ul``;
const LowWrap = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: 36px;
`;
const LowSkillsWrap = styled.ul`
  gap: 10px;
`;
