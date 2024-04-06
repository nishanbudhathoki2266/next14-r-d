import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Hello from about Layout</h1>
      {children}
    </>
  );
};

export default AboutLayout;
