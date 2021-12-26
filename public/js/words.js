// Grab the <ul id="words"> element using jQuery
let wordListElement = $('#words');

// Loop through the global `words` array 
// This variable is assigned in index.mst,
// and comes from our database
for (let word of words) {
    // Render each word as HTML elements
    // Note that this uses a different type 
    // of templating (not mustache)
    // This is the built in template string in JS
    // See:
    // https://www.w3schools.com/js/js_string_templates.asp
    let wordElement = $(`
        <li>
            ${word.word}
            <audio controls src="${word.audioSrc}"></audio>
            <button class="playMe">Play me!</button>
        </li>
    `);
    // Append each word element
    // inside of the <ul id="words"> element
    $('#words').append(wordElement);

    // Now setup a click listener
    wordElement.find('.playMe').on('click', function() {
        // 👆 This function will run when the "Play me!" button is clicked

        // Grab the <audio> element
        let audioElement = wordElement.find('audio')[0];
        
        // Start playing
        // See:
        // https://www.w3schools.com/jsref/dom_obj_audio.asp
        audioElement.play();

        // Move the play position, according to it's value in the database
        audioElement.currentTime = word.startMs / 1000;

        // Stop playing when we get to word.endMs
        let audioDuration = word.endMs - word.startMs;
        setTimeout(function() {
            audioElement.pause();
            audioElement.currentTime = 0;
        }, audioDuration);
    })
}