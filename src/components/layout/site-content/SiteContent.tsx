import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../router/routes";

export const SiteContent: FC = () => {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
};
