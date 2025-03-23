import styled from "styled-components";
import "@/mocks/banners";
import { PropsWithChildren } from "react";

interface SliderProps extends PropsWithChildren {
  cnt: number;
}

const Slider = ({ children }: SliderProps) => {
  return (
    <SliderContainer>
      <SliderWrapper>{children}</SliderWrapper>
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
