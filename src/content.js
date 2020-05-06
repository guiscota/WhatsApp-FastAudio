
//As the "header" class does not load when entering the page, it is necessary to use a check, and search until you find
const interval = setInterval(() => {

    const header = document.querySelector("._3auIg") //Where the button will be

    if (header) { //Check if found the header
        clearInterval(interval) //stop verification

        const button = document.createElement("Button") //Create a button
        button.innerHTML = "1.5x" //This button will display "2x"
        button.classList.add("TimeButton") //Defines button class

        button.addEventListener("click", () => { //Button click event
            const audios = document.querySelectorAll("audio"); //Select all áudios on the page

            audios.forEach((audio) => { //Cycle through all audios
                audio.playbackRate = 1.5; //Sets the audio playback speed
            })

            button.style.color = "#80FF00"
        })

        header.appendChild(button) //Add a node to the end of the header list
    }
}, 1000);
