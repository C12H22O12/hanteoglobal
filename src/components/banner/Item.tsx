import styled from "styled-components";

const Item = () => {
  return (
    <ItemWrapper>
      <ItemImgContainer>
        <ItemBedge>진행 중</ItemBedge>
        <img src="https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg" />
      </ItemImgContainer>
      <ItemBottomContainer>
        <ItemTitleContainer>
          <ItemTitle>[M COUNTDOWN]10월 2주차 엠카 사전 투표</ItemTitle>
          <ItemButton>투표하기</ItemButton>
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

const ItemBedge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;

  width: fit-content !important;
  padding: 2px 4px;

  color: #ffffff;
  background-color: #ff4fa1;
  font-weight: bold;
  border-radius: 6px;
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

  border: solid 1px #ccc;
  border-radius: 8px;

  overflow: hidden;
`;
