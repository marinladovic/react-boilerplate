import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { SiteContent } from "../layout/site-content/SiteContent";

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <SiteContent />
    </BrowserRouter>
  );
};
