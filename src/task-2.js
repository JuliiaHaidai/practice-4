import { getJSON } from "./task-1.js";

export default function getParallel(urls) {
    let responses = urls.map(url => getJSON(url))
    return Promise.all(responses);
}
