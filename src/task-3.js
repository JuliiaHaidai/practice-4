import { getJSON } from "./task-1.js";

export default async function getSeries(url1, url2) {
    let result = Promise.all([
        await getJSON(url1).catch(() => Promise.reject(new Error("First fetch failed"))),
        getJSON(url2).catch(() => Promise.reject(new Error("Second fetch failed")))
    ]);
    return result;
}
