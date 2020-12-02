//As the "header" class does not load when entering the page, it is necessary to use a check, and search until you find
const interval = setInterval(() => {

    const header = document.querySelector("._3auIg"); //Where the button will be

    if (header) { //Check if found the header
        clearInterval(interval); //stop verification        

        const button = document.createElement("Button"); //Create a button
        button.innerHTML = "1.5x"; //This button will display "1.5x"
        button.classList.add("TimeButtonOff"); //Defines button class

        var count = sessionStorage.setItem('count', 1);
        
        button.addEventListener("click", () => { //Button click event

            count = sessionStorage.getItem('count');
            
            if(count == 1){
                button.classList.remove("TimeButtonOff");
                button.classList.add("TimeButtonOn"); //color when active                

                velocity = 1.5; //Set a playback speed

                sessionStorage.setItem('status', 'On');
                sessionStorage.setItem('count', 2);
            }
            
            if(count == 2){
                button.innerHTML = "2x"; //This button will display "2x"
                
                velocity = 2; //Set a playback speed
                
                sessionStorage.setItem('count', 3);
            }
            
            if(count == 3){
                button.innerHTML = "2.5x"; //This button will display "2x"
                
                velocity = 2.5; //Set a playback speed
                
                sessionStorage.setItem('count', 4);
            }
            
            if(count == 4){
                button.classList.remove("TimeButtonOn");
                button.classList.add("TimeButtonOff"); //color when active                

                velocity = 1; //Set a playback speed

                sessionStorage.removeItem('status');
                sessionStorage.setItem('count', 1);
            }

            const audios = document.querySelectorAll("audio"); //Select all áudios on the page

            audios.forEach((audio) => { //Cycle through all audios
                audio.playbackRate = velocity; //Sets the audio playback speed
            });

        });

        header.appendChild(button); //Add a node to the end of the header list
    }
}, 1000);
