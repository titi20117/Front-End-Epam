function timer(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        },time);
    })
    .then (
        result => {
            console.log("Я вывелась через " + result/1000 + " сек.");
        },
        error => {
            console.log("Rejected: " + error);
        }
    );
}

timer(3000);