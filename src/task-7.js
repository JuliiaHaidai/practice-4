import { getJSON } from "./task-1.js";

export default async function getSequential(urls) {
    let result = [];
    return new Promise((resolve, reject) => {
        for(let url of urls){
            getJSON(url)
            .then(res => {
                result.push(res);
                if(result.length === urls.length){
                    resolve(result);
                    console.log(result);
                }
            }).catch(() => reject(new Error(`failed to fetch ${url}`)))
        }
    });
}