import Button from "../Button";
import ImageCarousel from "../ImageCarousel";
import Container from "./Container";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-primary font-bold text-[27px] lg:text-6xl">
          Menjangkau Dunia Usaha <br className="hidden md:block" /> dengan Injil
          Kristus
        </h1>
        <div className="h-[10px]" />
        <p className="text-xs font-normal text-primary lg:text-xl">
          Full Gospel Business Men’s International - Indonesia
        </p>
        <div className="h-[20px] lg:h-[30px]" />
        <Button />
        <div className="h-[60px] lg:h-[100px]" />
        <ImageCarousel />
      </div>
    </Container>
  );
};

export default HeroSection;
