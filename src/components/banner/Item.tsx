import { Banners } from "@/mocks/banners";
import styled from "styled-components";
import Bedge from "./Bedge";

const Item = ({ imgSrc, step, title, moveTo }: Banners) => {
  const handleMove = () => window.open(moveTo);

  return (
    <ItemWrapper>
      <ItemImgContainer>
        <Bedge step={step} />
        <img src={imgSrc} />
      </ItemImgContainer>
      <ItemBottomContainer>
        <ItemTitleContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemButton onClick={handleMove}>투표하기</ItemButton>
        </ItemTitleContainer>
        <ItemDate>It will be put date here</ItemDate>
      </ItemBottomContainer>
    </ItemWrapper>
  );
};

export default Item;

const ItemDate = styled.div`
  width: 100%;
  margin-top: 6px;

  text-align: right;
  font-size: 12px;
`;

const ItemButton = styled.button`
  padding: 4px;

  color: #ff4fa1;
  font-size: 12px;
  line-height: 12px;
  white-space: nowrap;
  border-radius: 16px;
  border: solid 1px #ff4fa1;
  background-color: #ffffff;
  font-weight: bold;
`;

const ItemTitle = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
`;

const ItemTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1.25fr;
  align-items: center;
  gap: 3rem;
`;

const ItemBottomContainer = styled.div`
  width: 100%;
  padding: 8px;
`;

const ItemImgContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  object-fit: none;
  object-position: center;
  overflow: hidden;

  * {
    width: 100%;
    height: auto;
  }
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 7fr 3fr;

  width: 90dvw;
  height: 200px;
  padding: 0;

  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);

  overflow: hidden;
`;
