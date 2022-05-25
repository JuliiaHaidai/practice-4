export default function showDialog(dialogEl) {
    $(dialogEl).modal("show");
    return new Promise(function(resolve, reject){
        dialogEl.addEventListener('click', function(event){
            let target = event.target;
            console.log(target);
            if(target.textContent === "Yes"){
                resolve();
            }
            if(target.textContent === "No"){
                reject();
            }
        })
    })
}
