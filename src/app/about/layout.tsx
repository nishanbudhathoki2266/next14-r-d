import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Layout",
  description: "Description from about",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Hello from about Layout</h1>
      {children}
    </>
  );
};

export default AboutLayout;
