
export default class EnhancedPromise extends Promise {
    static some(promises, count) {
        let result = [];
        let errors = [];
        if (count > promises.length) {
            return Promise.reject(new Error())
        }
         if (promises.length === 0) {
             return Promise.resolve(result)
         }
        return new EnhancedPromise((resolve, reject) => {
            promises.forEach(prom => {
                prom.then(res => {
                    result.push(res)
                    if(result.length >= count){
                        resolve(result)
                }})
                .catch(err => {
                    errors.push(err);
                    if(errors.length >= (promises.length - count)){
                        reject(new Error());
                    }
                })
            })
        });
        // let results = [];
        // return new EnhancedPromise((resolve, reject) => {
        //     Promise.allSettled(promises)
        //     .then(results => results.map(elem => {
        //         if(elem.status === "fulfilled"){
        //             result.push(elem);
        //         }
        //     }))
        //     if(result.length >= count){
        //         resolve(result);
        //     }
        //     reject(new Error())
        // });
    }
}
