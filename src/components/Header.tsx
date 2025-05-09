import { PATH, PathKey } from "@/constants/Path";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      {Object.keys(PATH).map((elem) => (
        <HeaderElement key={elem}>{PATH[elem as PathKey].text}</HeaderElement>
      ))}
    </HeaderContainer>
  );
};

export default Header;

const HeaderElement = styled.div``;

const HeaderContainer = styled.div``;
