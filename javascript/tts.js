
$(document).ready(function () {
       

    $('#textToSpeechBtn').on('click', function () {
        event.preventDefault();

        let ttsInput = $('#ttsInput').val().trim();
            
        $.ajax({ 
            url: 'https://cors-anywhere.herokuapp.com/https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyDVDrFjmbXqxXuGM4oY4Gb8CAxso7ZKFOQ', 
            method: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify({
                input: {
                text: ttsInput,
                },
                voice: {
                languageCode: 'en-US',
                name: "en-US-Wavenet-D"
                },
                audioConfig: {
                audioEncoding: 'MP3'
                }
            })
        }).then(function(res) { 
            console.log(res) 
            console.log('data:audio/mp3;base64,' + res.audioContent);
            $('#ttsAudio').attr('src', 'data:audio/mp3;base64,' + res.audioContent);
        });
    });    
});    