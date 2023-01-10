import React, { FC } from "react";
import { Link } from "react-router-dom";

export const SecondPage: FC = () => {
  return (
    <div>
      <h1>Second Page</h1>
      <p>This is the SecondPage</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
