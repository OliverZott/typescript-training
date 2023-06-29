const mainOne = () => {
    setTimeout(() => {
        console.log("1s");
        setTimeout(() => {
            console.log("2s");
            setTimeout(() => {
                console.log("3s");
            }, 1000);
        }, 1000);
    }, 1000);
}


function mainTwo() {
}



// mainOne();


// ------------------------------------------------------
/** Async version
 * 
 */

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const mainAsync = async () => {
    await delay(1000);
    console.log("1s");
    await delay(1000);
    console.log("1s");
    await delay(1000);
    console.log("1s");
}


mainAsync();