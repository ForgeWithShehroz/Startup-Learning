let randomnum2 = Math.ceil(0 + Math.random() * 7);
let randomnum3 = Math.ceil(0 + Math.random() * 7);
let randomnum4 = Math.ceil(0 + Math.random() * 7);
let randomnum5 = Math.ceil(0 + Math.random() * 7);
let num2 = Number(randomnum2 + "000")
let num3 = Number(randomnum3 + "000")
let num4 = Number(randomnum4 + "000")
let num5 = Number(randomnum5 + "000")
console.log(num2, num3, num4, num5);


function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let p1 = document.querySelector("#p1")

            setInterval(() => {
                if (p1.innerHTML.endsWith("...")) {
                    p1.innerHTML = p1.innerHTML.slice(0, p1.innerHTML.length - 3)
                } else {
                    p1.innerHTML = p1.innerHTML + "."
                }
            }, 200);

            p1.innerHTML = "Initializing Hacking"

        }, 1000);
        resolve("Success")
    })
}

function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let p2 = document.querySelector("#p2");
            setInterval(() => {
                if (p2.innerHTML.endsWith("...")) {
                    p2.innerHTML = p2.innerHTML.slice(0, p2.innerHTML.length - 3)
                } else {
                    p2.innerHTML = p2.innerHTML + "."
                }
            }, 200);
            p2.innerHTML = "Reading  your Files"
            resolve("Success")

        }, num2);
    })
}

function p3() {
    return new Promise((resolve, reject) => {
        let p3 = document.querySelector("#p3");
        setTimeout(() => {
            setInterval(() => {
                if (p3.innerHTML.endsWith("...")) {
                    p3.innerHTML = p3.innerHTML.slice(0, p3.innerHTML.length - 3)
                } else {
                    p3.innerHTML = p3.innerHTML + "."
                }
            }, 200);
            p3.innerHTML = "Pasword files detected"
            resolve("Success")

        }, num3);
    })
}

function p4() {
    return new Promise((resolve, reject) => {
        let p4 = document.querySelector("#p4");
        setTimeout(() => {
            setInterval(() => {
                if (p4.innerHTML.endsWith("...")) {
                    p4.innerHTML = p4.innerHTML.slice(0, p4.innerHTML.length - 3)
                } else {
                    p4.innerHTML = p4.innerHTML + "."
                }
            }, 200);
            p4.innerHTML = "Sending all personal and password files to server"
            resolve("Success")

        }, num4);
    })
}

function p5() {
    return new Promise((resolve, reject) => {
        let p5 = document.querySelector("#p5");

        setTimeout(() => {
            setInterval(() => {
                if (p5.innerHTML.endsWith("...")) {
                    p5.innerHTML = p5.innerHTML.slice(0, p5.innerHTML.length - 3)
                } else {
                    p5.innerHTML = p5.innerHTML + "."
                }
            }, 200);
            p5.innerHTML = "Cleaning up"
            resolve("Success")

        }, num5);
    })
}

async function Hack() {
    await p1()
    await p2()
    await p3()
    await p4()
    await p5()
}

Hack()