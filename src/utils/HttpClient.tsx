import axios from "axios";
import { setup } from "axios-cache-adapter";
import localforage from "localforage";
import ENV from "services";
export interface RequestModel {
    method: "get" | "post" | "put" | "delete";
    endpoint: string;
    payload?: any;
    cache?: CacheOptions;
}
export interface CacheOptions {
    enable: boolean;
    maxAge?: number;
}
const forageStore = localforage.createInstance({
    driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
    name: "Demo",
});
const HttpClient = {
    getMethod: async (path: string, cache?: CacheOptions) => {
        try {
            let url = ENV.API_URL + path;
            if (path.startsWith("http:") || path.startsWith("https:")) {
                url = path;
            }
            if (cache?.enable) {
                const api = setup({
                    cache: {
                        maxAge: (cache?.maxAge ?? 15) * 60 * 1000,
                        exclude: { query: false },
                        store: forageStore,
                    },
                });
                const {
                    data: { Data, Message, Success, StatusCode },
                } = await api.get(url);
                if (Success && StatusCode === 200) {
                    return Data;
                } else {
                    console.error("Lỗi gọi API", `Url: ${url}`, `StatusCode: ${StatusCode}`, `Message: ${Message}`);
                    return { Data, Message, Success, StatusCode };
                }
            } else {
                const {
                    data: { Data, Message, Success, StatusCode },
                } = await axios.get(url);
                if (Success && StatusCode === 200) {
                    return Data;
                } else {
                    console.error("Lỗi gọi API", `Url: ${url}`, `StatusCode: ${StatusCode}`, `Message: ${Message}`);
                    return { Data, Message, Success, StatusCode };
                }
            }
        } catch (error) {
            console.error(error);
        }
    },
    postMethod: async (path: string, body: any) => {
        try {
            let url = ENV.API_URL + path;
            if (path.startsWith("http:") || path.startsWith("https:")) {
                url = path;
            }
            const {
                data: { Data, Message, Success, StatusCode },
            } = await axios.post(url, body);
            if (Success && StatusCode === 200) {
                return { Data, Message, Success, StatusCode };
            } else {
                console.error("Lỗi gọi API", `Url: ${url}`, `StatusCode: ${StatusCode}`, `Message: ${Message}`);
                return { Data, Message, Success, StatusCode };
            }
        } catch (error) {
            console.error(error);
        }
    },
    putMethod: async (path: string, body: any) => {
        try {
            let url = ENV.API_URL + path;
            // if (path.concat('CalendarOrgSyncEvent')){
            //     url = 'http://localhost:5505/api/CalendarEvent/CalendarOrgSyncEvent';
            // }
            

            if (path.startsWith("http:") || path.startsWith("https:")) {
                url = path;
            }
            const {
                data: { Data, Message, Success, StatusCode },
            } = await axios.put(url, body);
            if (Success && StatusCode === 200) {
                return { Data, Message, Success, StatusCode };
            } else {
                console.error("Lỗi gọi API", `Url: ${url}`, `StatusCode: ${StatusCode}`, `Message: ${Message}`);
                return { Data, Message, Success, StatusCode };
            }
        } catch (error) {
            console.error(error);
        }
    },
    deleteMethod: async (path: string, data?: any) => {
        try {
            let url = ENV.API_URL + path;
            if (path.startsWith("http:") || path.startsWith("https:")) {
                url = path;
            }
            const {
                data: { Data, Message, Success, StatusCode },
            } = await axios({
                method: "delete",
                url: url,
                data: data ?? {}, // Dùng cho body
            });
            if (Success && StatusCode === 200) {
                return { Data, Message, Success, StatusCode };
            } else {
                console.error("Lỗi gọi API", `Url: ${url}`, `StatusCode: ${StatusCode}`, `Message: ${Message}`);
                return { Data, Message, Success, StatusCode };
            }
        } catch (error) {
            console.error(error);
        }
    },
    request: (req: RequestModel) => {
        switch (req.method) {
            case "get":
                return HttpClient.getMethod(req.endpoint, req.cache);
            case "post":
                return HttpClient.postMethod(req.endpoint, req.payload);
            case "put":
                return HttpClient.putMethod(req.endpoint, req.payload);
            case "delete":
                return HttpClient.deleteMethod(req.endpoint, req.payload);
        }
    },
    post: async(path: string, body: any) => {
        try {
            let url = ENV.API_URL + path;
            return await axios.post(url, body);
        } catch (error) {
            console.error(error);
        }
    },
    get: async (path: string, cache?: CacheOptions) => {
        try {
            let url = path.startsWith("http") ? path : ENV.API_URL + path;
            if (cache?.enable) {
                const api = setup({
                    cache: {
                        maxAge: (cache?.maxAge ?? 15) * 60 * 1000,
                        exclude: { query: false },
                        store: forageStore,
                    },
                });
                return await api.get(url);
            }
            return await axios.get(url);
        } catch (error) {
            console.error(error);
        }
    },
    put: async (path: string, body: any) => {
        try {
            let url = ENV.API_URL + path;
            return await axios.put(url, body);
        } catch (error) {
            console.error(error);
        }
    },
    delete: async (path: string, data?: any) => {
        try {
            let url = ENV.API_URL + path;
            return await axios.delete(url, data);
        } catch (error) {
            console.error(error);
        }
    },
    multipleRequest: (...requests: RequestModel[]) => {
        return Promise.all(
            requests.map((m) => {
                if (m.method === "get") {
                    return HttpClient.get(m.endpoint, m.cache)
                } else {
                    return axios({
                        method: m.method,
                        url: ENV.API_URL + m.endpoint,
                        data: m.payload,
                    })
                }
            })
        )
    }
}
export const BuildUrl = (url: string, request: any) => {
    let params = new URLSearchParams(request);
    return url + "?" + params.toString();
};
export default HttpClient;
