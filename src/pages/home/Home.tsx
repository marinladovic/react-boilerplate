import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link to="/second">Go to SecondPage</Link>
    </div>
  );
};
