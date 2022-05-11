const promiseWrapper = (logic) => {
    return new Promise(async (resolve, reject) => {
        const result = await logic()
        try {
            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}

export default promiseWrapper
