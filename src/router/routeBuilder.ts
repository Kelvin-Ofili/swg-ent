import { LandingPage, About, Gallery, TicketPurchase, Contact } from "pages";
import { PathRouteProps } from "react-router-dom";
import { Routes } from "./routes";
import { BaseLayoutUI } from "layouts";

export interface RouteBuilderItem extends PathRouteProps {
	Layout?: React.FC<any>;
	Element: React.FC;
	props?: "both" | "header" | "footer";
}

export const RouteBuilder: RouteBuilderItem[] = [
	{
		path: Routes.landing,
		Element: LandingPage,
		Layout: BaseLayoutUI,
		props: "header",
	},
	{
		path: Routes.about,
		Element: About,
		Layout: BaseLayoutUI,
	},
	{
		path: Routes.gallery,
		Element: Gallery,
		Layout: BaseLayoutUI,
	},
	{
		path: Routes.tickets,
		Element: TicketPurchase,
		Layout: BaseLayoutUI,
	},
	{
		path: Routes.contact,
		Element: Contact,
		Layout: BaseLayoutUI,
		props: "footer",
	},
];
