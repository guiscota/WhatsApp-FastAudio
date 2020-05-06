
//As the "header" class does not load when entering the page, it is necessary to use a check, and search until you find
const interval = setInterval(() => {

    const header = document.querySelector("._3auIg") //where the button will be

    if(header){
        console.log(header)
        clearInterval(interval)
    }
}, 1000);

