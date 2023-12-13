"use client";

const DrinkErrorPage = (error) => {
  return <div>{error.error.message}</div>;
};

export default DrinkErrorPage;
