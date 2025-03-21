import styled from "styled-components";
import Arrow from "public/footer-arrow.png";
import CurationElement from "./CurationElement";

const CurationList = () => {
  return (
    <ListContainer>
      <ListTitle>콘텐츠 큐레이션 제목</ListTitle>
      <ElementWrapper>
        {Array.from({ length: 8 }, (_, idx) => (
          <CurationElement key={idx} idx={idx} />
        ))}
      </ElementWrapper>
      <ListFooter>
        <img src={Arrow} alt="Footer Arrow" width={16} />
      </ListFooter>
    </ListContainer>
  );
};

export default CurationList;

const ListFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d4d4d4;
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  padding: 0 12px 8px 12px;

  background-color: #e0e0e0;
  box-sizing: border-box;
`;

const ListTitle = styled.div`
  padding: 8px 12px;

  font-size: 16px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #e0e0e0;
`;
