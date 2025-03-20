export const PATH_NAME = {
  CHART: "CHART",
  WHOOK: "WHOOK",
  EVENT: "EVENT",
  NEWS: "NEWS",
  STORE: "STORE",
  CHARGING: "CHARGING",
} as const;

export type PathKey = keyof typeof PATH_NAME;

export type PathElement = {
  text: string;
  path: string;
};

// TODO : path 수정
export const PATH: Record<PathKey, PathElement> = {
  CHART: { text: "차트", path: "/chart" },
  WHOOK: { text: "Whook", path: "/whook" },
  EVENT: { text: "이벤트", path: "/event" },
  NEWS: { text: "뉴스", path: "/news" },
  STORE: { text: "스토어", path: "/store" },
  CHARGING: { text: "충전소", path: "/charging" },
};