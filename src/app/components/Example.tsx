"use client";

import { useParams } from "next/navigation";
import React from "react";

const Example = () => {
  const params = useParams();
  return <h1>ID with {params.id}</h1>;
};

export default Example;
