import { IUserContextModel } from "models";
import HttpClient, { BuildUrl } from "./HttpClient";

export const getUser = () : IUserContextModel | any => {
    if(localStorage.getItem("user")?.toString() + "" === "undefined") { return JSON.parse("{}") }
    else { return JSON.parse(localStorage.getItem("user") ?? "{}") }
};
export {  HttpClient, BuildUrl };
