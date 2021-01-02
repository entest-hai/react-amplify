let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a==2) {
        resolve("Success")
    } else {
        reject("Fail")
    }
})

p.then((message) => {
    console.log("This is in the then ", message)
}).catch((message)=> {
    console.log("This is in the catch ", message)
})


const userLeft = false 
const userWatchingCatMeme = true 

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Meme", 
                message: "Webdevelop"
            })
        } else {
            resolve("Thumbs up and OK")
        }
    })
}

watchTutorialPromise().then(message => {
    console.log("OK", message)
}).catch((error) => {
    console.log("error", error)
})
