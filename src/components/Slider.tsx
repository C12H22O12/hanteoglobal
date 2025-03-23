import styled from "styled-components";
import "@/mocks/banners";
import { PropsWithChildren, useEffect, useRef } from "react";

interface SliderProps extends PropsWithChildren {
  cnt: number;
  curPage: number;
  handleCurPage: (idx: number) => void;
}

const Slider = ({ children, cnt, curPage, handleCurPage }: SliderProps) => {
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = 90; // ItemWrapper의 대략적인 너비 (dvw 단위)

  useEffect(() => {
    if (cnt && sliderContainerRef.current) {
      const container = sliderContainerRef.current;
      const offset =
        itemWidth * curPage - container.offsetWidth / 2 + itemWidth / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [curPage, cnt]);

  return (
    <SliderWrapper>
      <SliderContainer ref={sliderContainerRef}>
        <SliderContentWrapper>{children}</SliderContentWrapper>
      </SliderContainer>
      <SliderPageContainer>
        {Array.from({ length: cnt }, (_, idx) => (
          <SliderPageDot
            key={idx}
            $isCurrent={curPage === idx}
            onClick={() => handleCurPage(idx)}
          />
        ))}
      </SliderPageContainer>
    </SliderWrapper>
  );
};

export default Slider;

const SliderPageDot = styled.div<{ $isCurrent: boolean }>`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ $isCurrent }) => ($isCurrent ? "#ff4fa1" : "#d4d4d4")};
  cursor: pointer;
`;

const SliderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
`;

const SliderPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;
`;

const SliderContainer = styled.div`
  display: flex;
  width: 100dvw;
  padding: 12px 0 0 0;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderWrapper = styled.div``;
