import { API, Auth } from "aws-amplify";

const backendAPI = "backendapi";


var currencyFormatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
//TODO: this is a localized date, fix it
var dateFormatter = new Intl.DateTimeFormat("es-CO");
var fullDateFormatter = new Intl.DateTimeFormat("es-CO", { dateStyle: "long" });


export function completeLocalUrl(path: string): string {
    return `http://localhost:3001${path}`;
}

export function isRunningOnCloud(): boolean {
    const host = window?.location?.host;
    if (host.indexOf(".co") > -1) return true;
    return false;
}

export function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getLocal(path: string, params: any = {}) {
    let url = completeLocalUrl(path);
    if (params && Object.keys(params).length > 0) {
        const search = new URLSearchParams(params);
        url = `${url}?${search.toString()}`;
    }
    const response = await fetch(url);
    return response.json();
}

export async function fetchData(path: string, params: any = {}): Promise<any> {
    let result = undefined;
    if (isRunningOnCloud()) {
        result = await API.get(backendAPI, path, { queryStringParameters: params });
    } else {
        result = await getLocal(path, params);
    }
    return result;
}

function mergeHeaders(current: any, overriden: any): any {
    Object.keys(overriden).forEach((k) => (current[k] = overriden[k]));
    return current;
}

async function postLocal(path: string, body: any = {}, options: any = {}) {
    let url = completeLocalUrl(path);
    const { headers = {} } = options;
    const allHeaders = mergeHeaders(
        { "Content-Type": "application/json" },
        headers
    );
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: allHeaders,
    });
    return response.json();
}

export async function postData(
    path: string,
    body: any = {},
    options: any = {}
): Promise<any> {
    let result = undefined;
    if (isRunningOnCloud()) {
        result = await API.post(backendAPI, path, { body });
    } else {
        result = await postLocal(path, body, options);
    }
    return result;
}


export function makeQuery(path: string, params: any = {}): () => Promise<any> {
    return () => fetchData(path, params);
}

export function formatNumber(number: number): string {
    return number.toLocaleString();
}

export function formatCurrency(number: number): string {
    return currencyFormatter.format(number);
}

export function formatDate(
    date: Date | string,
    dateStyle: string = ""
): string {
    if (!date) return "";
    if (typeof date == "string") date = new Date(Date.parse(date));
    if (dateStyle == "long") return fullDateFormatter.format(date);
    return dateFormatter.format(date);
}

export const getUrlHashQuery = () =>
    Object.fromEntries(new URLSearchParams(window.location.hash.substring(1)));

export const getUrlSearchQuery = () =>
    Object.fromEntries(new URLSearchParams(window.location.search.substring(1)));