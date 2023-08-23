import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteBuilder } from "./routeBuilder";
import { About, Gallery } from "pages";

const MainRouter: React.FC = () => {
	console.log(RouteBuilder);
	return (
		<>
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
