import { Metadata } from "next";
import React from "react";

// Dynamically get meta data if needed
export async function generateMetadata({ params }): Promise<Metadata> {
  return { title: "users name" };
}

const AboutPage = () => {
  return <div>About</div>;
};

export default AboutPage;
