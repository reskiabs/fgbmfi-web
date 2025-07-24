const Button = () => {
  const handleClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.jaknet.fgbmfi01&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="w-[130px] h-[35px] text-white bg-primary rounded-full hover:bg-primary-dark text-xs lg:text-xl font-medium lg:w-[250px] lg:h-[60px]"
    >
      Gabung Sekarang
    </button>
  );
};

export default Button;
