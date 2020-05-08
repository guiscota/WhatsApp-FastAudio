//As the "header" class does not load when entering the page, it is necessary to use a check, and search until you find
const interval = setInterval(() => {

    const header = document.querySelector("._3auIg"); //Where the button will be

    if (header) { //Check if found the header
        clearInterval(interval); //stop verification        

        const button = document.createElement("Button"); //Create a button
        button.innerHTML = "1.5x"; //This button will display "1.5x"
        button.classList.add("TimeButtonOff"); //Defines button class

        button.addEventListener("click", () => { //Button click event

            if (button.classList.contains("TimeButtonOff")) {
                button.classList.remove("TimeButtonOff");
                button.classList.add("TimeButtonOn"); //color when active                

                velocity = 1.5; //Define a velocidade da reprodução

                sessionStorage.setItem('status', 'On');
            }
            else {
                button.classList.remove("TimeButtonOn");
                button.classList.add("TimeButtonOff"); //color when active                

                velocity = 1; //Define a velocidade da reprodução

                sessionStorage.removeItem('status');
            }

            const audios = document.querySelectorAll("audio"); //Select all áudios on the page

            audios.forEach((audio) => { //Cycle through all audios
                audio.playbackRate = velocity; //Sets the audio playback speed
            });

        });

        header.appendChild(button); //Add a node to the end of the header list
    }
}, 1000);
