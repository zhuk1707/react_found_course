import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/Routes";

const AppRouter = () => {
  const isAuthorise = true

  return (
    isAuthorise
    ? <Routes>
        {publicRoutes.map(route =>
          <Route key={Date.now()} path={route.path} element={<route.element/>}/>)}
      </Routes>
    : <Routes>
      {privateRoutes.map(route =>
        <Route key={Date.now()} path={route.path} element={<route.element/>}/>)}
    </Routes>
  )
};

export default AppRouter;