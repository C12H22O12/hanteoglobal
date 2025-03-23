import { Banners } from "@/mocks/banners";
import styled from "styled-components";

type Step = Banners["step"];

type StepContents = "공개 예정" | "진행 중" | "종료";

interface BedgeProps {
  step: Step;
}

const BEDGE_TYPE: {
  [key in Step]: { bgColor: string; content: StepContents };
} = {
  expected: { bgColor: "#ffb3be", content: "공개 예정" },
  progress: { bgColor: "#ff4fa1", content: "진행 중" },
  end: { bgColor: "#999999", content: "종료" },
};

const Bedge = ({ step }: BedgeProps) => {
  const { bgColor, content } = BEDGE_TYPE[step];

  return <BedgeContainer $bgColor={bgColor}>{content}</BedgeContainer>;
};

export default Bedge;

const BedgeContainer = styled.div<{
  $bgColor: (typeof BEDGE_TYPE)[keyof typeof BEDGE_TYPE]["bgColor"];
}>`
  position: absolute;
  top: 8px;
  left: 8px;

  width: fit-content !important;
  padding: 2px 4px;

  color: #ffffff;
  background-color: ${({ $bgColor }) => $bgColor};
  font-weight: bold;
  border-radius: 6px;
`;
