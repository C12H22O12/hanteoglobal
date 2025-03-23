import { useQuery } from "@tanstack/react-query";
import Slider from "../Slider";
import { getBanners } from "@/apis/banners";
import Item from "./Item";

const Body = () => {
  const { data } = useQuery({ queryKey: ["BannerData"], queryFn: getBanners });

  console.log(data?.data);

  return (
    data && (
      <Slider cnt={data.data.length}>
        {data?.data.map((d, idx) => (
          <Item key={`${d.title}_${idx}`} {...d} />
        ))}
      </Slider>
    )
  );
};

export default Body;
