
//As the "header" class does not load when entering the page, it is necessary to use a check, and search until you find
const interval = setInterval(() => {

    const header = document.querySelector("._3auIg") //Where the button will be

    if (header) { //Check if found the header
        clearInterval(interval) //stop verification
        Storage.setItem("status", 0) //initialize with the function disabled

        const button = document.createElement("Button") //Create a button
        button.innerHTML = "1.5x" //This button will display "1.5x"
        button.classList.add("TimeButton") //Defines button class

        button.addEventListener("click", () => { //Button click event

            if (localStorage.getItem('status') === 0) {
                Storage.setItem("status", 1) //Defines status activate

                button.style.color = "#01DF01" //color when active                

                velocity = 1.5 //Define a velocidade da reprodução
            }
            else {
                Storage.setItem("status", 0) //Defines status desactive

                button.style.color = "gray" //color when desactive 

                velocity = 1 //Define a velocidade da reprodução        
            }

            const audios = document.querySelectorAll("audio"); //Select all áudios on the page

            audios.forEach((audio) => { //Cycle through all audios
                audio.playbackRate = velocity; //Sets the audio playback speed
            })

        })

        header.appendChild(button) //Add a node to the end of the header list
    }
}, 1000);
