const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-primary to-primary-dark w-full h-[124px] flex flex-col justify-center items-center md:flex-row md:justify-between md:px-[40px] lg:px-[150px] md:h-[162px] lg:h-[192px]">
        <div className="text-center -space-y-5 md:text-left md:-space-y-3">
          <h1 className="text-xl font-bold text-white md:text-[25px] lg:text-[40px]">
            FGBMFI Indonesia
          </h1>
           
          <p className="text-sm font-normal text-white md:text-[16px] lg:text-[20px]">
            Full Gospel Business Men’s Fellowship International
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b gap-2 from-secondary to-teritary w-full h-[32px] flex flex-col justify-center items-center md:items-start md:px-[40px] lg:px-[150px] md:h-[42px] lg:h-[60px]">
        <p className="text-xs text-primary font-medium md:text-[12px] lg:text-[15px]">
          © 2025, All right reserved, FGBMFI Indonesia
        </p>
      </div>
    </div>
  );
};

export default Footer;
