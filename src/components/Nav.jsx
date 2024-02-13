import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Ul>
      <StyledNavLink to="/" activeClassname="active">
        Home
      </StyledNavLink>
      <StyledNavLink to="/projects" activeClassname="active">
        Project
      </StyledNavLink>
      <StyledNavLink to="/contact" activeClassname="active">
        Contact
      </StyledNavLink>
    </Ul>
  );
};

export default Nav;

const Ul = styled.ul`
  width: 170px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  color: #fffdfd;
  display: inline-block;
  transition: ease-in-out 0.3s;
  &:hover {
    color: rgba(93, 232, 215, 0.3);
  }
  &.active {
    color: #5de8d7;
  }
`;
