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
      className="w-[150px] h-[40px] text-white bg-primary rounded-full hover:bg-primary-dark text-sm lg:text-xl font-medium lg:w-[250px] lg:h-[60px] hover:cursor-pointer"
    >
      Gabung Sekarang
    </button>
  );
};

export default Button;
