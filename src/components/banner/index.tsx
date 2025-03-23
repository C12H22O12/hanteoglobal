import { useQuery } from "@tanstack/react-query";
import Slider from "../Slider";
import { getBanners } from "@/apis/banners";
import Item from "./Item";
import { useState } from "react";

const Banner = () => {
  const { data } = useQuery({ queryKey: ["BannerData"], queryFn: getBanners });
  const [curPage, setCurPage] = useState<number>(0);

  const handleCurPage = (idx: number) => setCurPage(idx);

  return (
    data && (
      <Slider
        cnt={data.data.length}
        curPage={curPage}
        handleCurPage={handleCurPage}
      >
        {data?.data.map((d, idx) => (
          <Item
            key={`${d.title}_${idx}`}
            idx={idx}
            handleCurPage={handleCurPage}
            {...d}
          />
        ))}
      </Slider>
    )
  );
};

export default Banner;
