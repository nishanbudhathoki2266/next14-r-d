"use client";

import React from "react";

const ErrorPage = ({ error, reset }: any) => {
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={reset}>Retry</button>
    </>
  );
};

export default ErrorPage;
