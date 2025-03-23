import styled from "styled-components";
import Item from "./Item";
import axios from "axios";
import "@/mocks/banners";

const Slider = () => {
  axios.get("/banners").then((response) => {
    console.log(response);
  });

  return (
    <SliderContainer>
      <SliderWrapper>
        <Item />
        <Item />
      </SliderWrapper>
      <SliderPageContainer></SliderPageContainer>
    </SliderContainer>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: max-content;
`;

const SliderPageContainer = styled.div``;

const SliderContainer = styled.div`
  width: 100dvw;
  padding: 12px 0 0 0;

  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
