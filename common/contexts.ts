import { createContext } from "react";
import { Agency } from "../model/agency";
export const DefaultAgency: Agency = {
    name: "Inmobi",
    logoUrl: "/images/header-logo2.png",
    key: "inmobi",
    createdAt: new Date(Date.parse("01-01-2023")),
    mainLine: "Default agency",
    theme: {
        primaryColor: "blue",
        secondaryColor: "red"
    }
}
export const AgencyContext = createContext<Agency>(DefaultAgency)