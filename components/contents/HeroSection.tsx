import api from "@/lib/helper/api";
import { Banner } from "@/types/banner";
import { useEffect, useState } from "react";
import Button from "../Button";
import ImageCarousel from "../ImageCarousel";
import Container from "./Container";

const HeroSection = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<{ data: Banner[] }>("/banners");
        const banners = response.data.data;
        const desktopImages = banners.map(
          (item) => item.full_desktop_image_url
        );
        setImages(desktopImages);
      } catch (error) {
        console.error("Gagal fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-primary font-bold text-[27px] md:text-[40px] lg:text-6xl">
          Menjangkau Dunia Usaha <br className="hidden md:block" /> dengan Injil
          Kristus.
        </h1>
        <div className="h-[10px]" />
        <p className="text-sm font-normal text-primary md:text-[17px] lg:text-xl">
          Full Gospel Business Men’s Fellowship International - Indonesia
        </p>
        <div className="h-[20px] lg:h-[30px]" />
        <Button />
        <div className="h-[60px] md:h-[80px] lg:h-[100px]" />
        {images.length > 0 && <ImageCarousel images={images} />}
      </div>
    </Container>
  );
};

export default HeroSection;
