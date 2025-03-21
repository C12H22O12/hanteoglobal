import styled from "styled-components";

export interface CurationElementProps {
  idx: number;
}

const CurationElement = ({ idx }: CurationElementProps) => {
  const setNumber = () => (idx >= 10 ? idx : "0" + (idx + 1));

  return (
    <ElementContainer>
      <Rank>{setNumber()}</Rank>
      <Contents>Sample Contents</Contents>
    </ElementContainer>
  );
};

export default CurationElement;
const Contents = styled.div`
  position: relative;

  flex-grow: 1;

  width: 100%;
  margin-left: -6px;
  padding: 12px 12px 12px 18px;

  border-radius: 0 8px 8px 0;
  background-color: #ffffff;
`;

const Rank = styled.div`
  position: relative;
  z-index: 2;

  width: 40px;
  padding: 12px;

  background-color: #999999;

  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const ElementContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;
