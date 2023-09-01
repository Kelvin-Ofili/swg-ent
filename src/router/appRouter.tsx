import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RouteBuilder } from "./routeBuilder";
import { Loader } from "components";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [pathname]);

  return (
    <>
      <Loader loading={loading} />
    </>
  );
};

const MainRouter: React.FC = () => {
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
