import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RouteBuilder } from "./routeBuilder";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainRouter: React.FC = () => {
  console.log(RouteBuilder);
  return (
    <>
      <ScrollToTop />
      <Routes>
        {RouteBuilder?.length > 0 &&
          RouteBuilder.map((item, idx) => {
            const { Element, path, caseSensitive, Layout, props } = item;
            // Checks if a layout exists or not
            const PageComponent = Layout ? (
              <Layout props={props}>
                <Element />
              </Layout>
            ) : (
              <Element />
            );
            return (
              <Route
                key={idx}
                path={path}
                element={PageComponent}
                caseSensitive={caseSensitive}
              />
              // <Route path={path} element={<Gallery />} />
            );
          })}
      </Routes>
    </>
  );
};

export { MainRouter };
