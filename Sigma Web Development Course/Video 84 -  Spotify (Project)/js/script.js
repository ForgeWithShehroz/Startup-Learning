let currentSong = new Audio();
let songs;
let currentFolder;
function formatSeconds(totalSeconds) {
    // If the audio metadata hasn't loaded yet, duration might be NaN
    if (isNaN(totalSeconds)) return "00:00";

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60); // Added Math.floor here

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
}


async function getSongs(folder) {
    currentFolder = folder
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`);
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];

        if (element.href.endsWith(".mp3")) {
            // FIX: Keep the full filename with .mp3 so the audio object can find it later
            songs.push(element.href.split('/').pop());
        }
    }

    // show list of all songs in library field
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = ""
    for (const song of songs) {
        // song still has ".mp3", so we clean it up visually using .replace('.mp3', '')
        const cleanName = decodeURIComponent(song).replace('.mp3', '');

        // FIX: Store the actual raw filename inside a data attribute (data-filename) 
        // to guarantee the click event reads the correct, uncorrupted filename.
        songUL.innerHTML = songUL.innerHTML +
            `
        <li data-filename="${song}">
            <img src="img/music.svg" class="invert" alt="">
            <div class="songInfo">
                <div class="songName">${cleanName}</div>
                <div class="songartist">Shehroz</div>
            </div>
            <div class="playNow">
                <span>Play Now</span>
                <img class="invert" src="img/play.svg" alt="">
            </div>
        </li> 
        `;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", event => {
            // Directly grab the exact filename from the data attribute 
            const trackName = e.getAttribute("data-filename");
            console.log("Playing:", trackName);
            playMusic(trackName);
        });
    });


    return songs;
}



const playMusic = (track, pause = false) => {
    // FIX: URL-encode the track name again using encodeURIComponent 
    // so spaces turn back into %20 for a valid network request
    // const audio = new Audio("/songs/" + encodeURIComponent(track));
    // audio.play();

    currentSong.src = `/${currentFolder}/` + encodeURIComponent(track);
    if (!pause) {
        currentSong.play();
        play.src = "img/pause.svg";
    } else {
        // If pause is true, keep it paused and show the play icon
        currentSong.pause();
        play.src = "img/play.svg";
    }

    document.querySelector(".songinfo").innerHTML = decodeURIComponent(track).replace(".mp3", "");
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}


async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardContainer");
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element.href.includes("/songs")) {
            let folder = element.href.split("/").slice(-2)[0];
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`);
            let response = await a.json();
            cardContainer.innerHTML = cardContainer.innerHTML +
                `
            <div class="card" data-folder="${folder}">
                        <div class="play">
                            <svg xmlns=" http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="#000000">
                                <path d="M8 5.14v14c0 .86.94 1.39 1.66.9l10-7c.61-.43.61-1.38 0-1.8l-10-7A1 1 0 0 0 8
                                    5.14z" />
                            </svg>
                        </div>
                            <img src="/songs/${folder}/cover.jpg" alt="">
                            <h3>${response.title}</h3>
                            <p class="artistList">${response.description}</p>
                        </div>
            `
        }
    }

    // load the playlist whenever the card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            // console.log(item.target.dataset);
            // console.log(item.currentTarget.dataset);
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0])


        })
    })

}
async function main() {
    // Get all songs
    songs = await getSongs(`songs/cs`);

    if (songs.length > 0) {
        playMusic(songs[0], true);
    }

    // Add an event listener to play btn
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    })

    // Display all the albums on the page
    await displayAlbums()

    // Listen for the timeupdate event
    currentSong.addEventListener("timeupdate", e => {
        document.querySelector(".songtime").innerHTML =
            `${formatSeconds(currentSong.currentTime)} / ${formatSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    });

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener to hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener to close btn
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add event listener to previous element
    previous.addEventListener("click", () => {
        let index = songs.indexOf(decodeURIComponent(currentSong.src.split("/").slice(-1)))
        console.log(index - 1);

        playMusic(songs[index + 1])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add event listener to next element
    next.addEventListener("click", () => {
        currentSong.pause()
        let index = songs.indexOf(decodeURIComponent(currentSong.src.split("/").slice(-1)));

        if ((index + 1) < songs.length) {

            playMusic(songs[index + 1])
        }
    })

    // Add an event listener to range input(volume)
    volume.addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100");
        currentSong.volume = parseInt(e.target.value) / 100

    })

    volumeIcon = document.querySelector(".volume").getElementsByTagName("img")[0];
    volumeIcon.addEventListener("click", (e) => {
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            document.querySelector(".volume>input").value = 0;
            currentSong.volume = 0;
        } else {

            e.target.src = e.target.src.replace("mute.svg", "volume.svg"); document.querySelector(".volume>input").value = 50;
            currentSong.volume = 0.5;
        }
    })


}



/*

// Play the first audio
var audio = new Audio(songs[6]);
// audio.play()

// Event Listener to see the properties of the audio
audio.addEventListener("canplaythrough", (event) => {
     the audio is now playable; play it if permissions allow
    // audio.play();
    console.log(audio.duration, audio.currentSrc, audio.currentTime);

});

*/

main();