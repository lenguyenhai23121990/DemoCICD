import { IUserContextModel } from "models";
import HttpClient, { BuildUrl } from "./HttpClient";


export const getUser = () : IUserContextModel => JSON.parse(localStorage.getItem("user") ?? "{}");
export {  HttpClient, BuildUrl };
