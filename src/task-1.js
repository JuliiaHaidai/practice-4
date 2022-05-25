// Change us!

function status(response) {
    if(response.ok){
        return response;
    }
    else{
        throw new Error(response.statusText)
    }
}

function json(response) {
    return response.json();
}

function getJSON(url) {
    return window.fetch(url).then(res => status(res)).then(res => json(res));
}


export { status, json, getJSON };
