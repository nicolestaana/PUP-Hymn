// Selecting the audio element and all individual lyric lines
const audio = document.getElementById("audio");
const lyrics = document.querySelectorAll("#lyrics li");

// Represents the start time for each line of the lyrics
const timings = [12, 15, 18, 23, 29, 35, 41, 47, 53, 56, 62, 68, 74, 80, 86, 89, 95];

// Listener that triggers every time the playback position changes
audio.addEventListener("timeupdate", function() {

    // Get the current playback position of the audio
    const currentTime = audio.currentTime;

    for (let index = timings.length - 1; index >= 0; index--) {

        if (currentTime >= timings[index]) {
            lyrics.forEach(line => line.classList.remove("active"));
            lyrics[index].classList.add("active");
            lyrics[index].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            break;
        }
    }

});
