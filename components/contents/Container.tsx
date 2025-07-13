import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-[30px] md:px-[70px] lg:px-[150px]">{children}</div>;
};

export default Container;
