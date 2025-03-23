import mock, { MockResponse } from "./instance";

export interface Banners {
  imgSrc: string;
  step: "expected" | "progress" | "end";
  title: string;
  moveTo: string;
  period: {
    start: Date;
    end: Date;
    standard: "KST" | "UTC";
  };
}

mock.onGet("/banners").reply<MockResponse<Banners[]>>(200, {
  data: [
    {
      imgSrc: "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=3001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      step: "expected",
      title: "[배너 예시] 고양이 1 | Unsplash 이동",
      moveTo: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0-%EC%83%88%EB%81%BC-%EA%B3%A0%EC%96%91%EC%9D%B4-Tn8DLxwuDMA",
      period: { start: new Date(), end: new Date(), standard: "KST" },
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      step: "progress",
      title: "[배너 예시] 고양이 2 | Unsplash 이동",
      moveTo: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EA%B0%88%EC%83%89-%EC%AA%BD%EB%AA%A8%EC%9D%B4-%EC%84%B8%EA%B3%B5-%EB%A7%88%EB%A3%A8-%EB%B0%94%EB%8B%A5%EC%97%90-%EC%A3%BC%ED%99%A9%EC%83%89-%EC%A4%84%EB%AC%B4%EB%8A%AC-%EA%B3%A0%EC%96%91%EC%9D%B4-LEpfefQf4rU",
      period: { start: new Date(), end: new Date(), standard: "UTC" },
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      step: "end",
      title: "[배너 예시] 고양이 3 | Unsplash 이동",
      moveTo: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%85%B8%EB%9E%80%EC%83%89-%ED%91%9C%EB%A9%B4%EC%97%90-%EC%A3%BC%ED%99%A9%EC%83%89-%EC%96%BC%EB%A3%A9-%EA%B3%A0%EC%96%91%EC%9D%B4-p6yH8VmGqxo",
      period: { start: new Date(), end: new Date(), standard: "KST" },
    },
    {
      imgSrc: "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=3056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      step: "progress",
      title: "[배너 예시] 고양이 4 | Unsplash 이동",
      moveTo: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%9E%85%EC%9D%84-%EB%B2%8C%EB%A6%B0-%EA%B3%A0%EC%96%91%EC%9D%B4%EC%9D%98-%ED%81%B4%EB%A1%9C%EC%A6%88%EC%97%85-qQgOMo4vpnU",
      period: { start: new Date(), end: new Date(), standard: "KST" },
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      step: "progress",
      title: "[배너 예시] 고양이 5 | Unsplash 이동",
      moveTo: "https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%EC%9C%88%EC%A0%80-%EC%9D%98%EC%9E%90%EC%97%90-%EA%B0%88%EC%83%89-%EC%A4%84%EB%AC%B4%EB%8A%AC-%EA%B3%A0%EC%96%91%EC%9D%B4-eMzblc6JmXM",
      period: { start: new Date(), end: new Date(), standard: "UTC" },
    },
  ],
});
