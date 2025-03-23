import { Banners } from "@/mocks/banners";
import { MockResponse } from "@/mocks/instance";
import axios from "axios";

export const getBanners = async (): Promise<MockResponse<Banners[]>> => {
  try {
    const { status, data } = await axios.get("/banners");

    if (status === 200) {
      return data;
    } else {
      console.error("❌ 오류: 응답 코드", status);
      return { data: [] };
    }
  } catch (error) {
    console.error("❌ 요청 실패:", error);
    return { data: [] };
  }
};
