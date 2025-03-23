import { Banners } from "@/mocks/banners";
import { MockResponse } from "@/mocks/instance";
import axios from "axios";

export const getBanners = async (): Promise<MockResponse<Banners[]>> =>
  (await axios.get("/banners")).data;
