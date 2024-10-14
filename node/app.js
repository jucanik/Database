console.log("helloworld");
// javascript : client side scripting lsnguages
// node js is the runtime environment to run javascript on the server. dto enable server side procesingifferent browsers uses different jvascript engines
// node uses google chrome implementstion of js engine of v8 

function add(a,b, callback) {
    callback(a+b);
}
function print(c){
    console.log(c)
}

add(1,2, print)
add(3,4, function(c){
    console.log(c);
})
add(5,6, (c) => {
    console.log(c);
})

// inline functions are called anonymous function
// var is global scoped and let is block scoped

function add_v2(data) {
    let successMessage = {
        status: 'success',
        message: 'All is well'
    }
    let failureMessage = {
        status: 'failure',
        message: 'Error'
    }
    return new Promise((resolve, reject) => {
        if(typeof data === 'boolean' && data === true) {
            resolve(successMessage);
        } else {
           reject(failureMessage);
        }
    })
}

add_v2(true).then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
)

add_v2(false).then(
    (successMessage) => {
        console.log(successMessage);
        return add_v2(true)
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
).then(
    ()=>{
        console.log("second promise resolved")
    }
).catch(
    ()=>{
        console.log("An error occurred")
    }
)

// const logger = require('./logger')