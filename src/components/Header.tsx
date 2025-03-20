import { PATH, PathKey } from "@/constants/Path";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();

  console.log(location);

  return (
    <HeaderContainer>
      {(Object.keys(PATH) as PathKey[]).map((elem) => (
        <HeaderElement
          key={elem}
          $isCurPath={location.pathname === PATH[elem].path}
        >
          {PATH[elem].text}
        </HeaderElement>
      ))}
    </HeaderContainer>
  );
};

export default Header;

const HeaderElement = styled.div<{ $isCurPath: boolean }>`
  flex-grow: 1;

  width: 100%;

  color: ${({ $isCurPath }) => ($isCurPath ? "white" : "black")};
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  width: fit-content;
  padding: 12px 28px;

  background-color: #ffb3be;
`;
