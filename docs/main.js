var body = document.getElementById("body");

var photos = ['url(photos/danis-lou-361403-unsplash.jpg)', 'url(photos/johannes-plenio-262531-unsplash.jpg)', 'url(photos/aleksandr-eremin-237189-unsplash.jpg)', 'url(photos/artisanalphoto-530247-unsplash.jpg)', 'url(photos/kate-tandy-1579-unsplash.jpg)'];
body.style.backgroundImage = photos[Math.round(Math.random() * photos.length)];

var activeSong;
//Plays the song. Just pass the id of the audio element.
function play(id){
    //Sets the active song to the song being played.  All other functions depend on this.
    activeSong = document.getElementById(id);
    var btn = document.getElementById("btn");
    //Plays the song defined in the audio tag.
    if (activeSong.paused){
        activeSong.play();
        btn.classList.add("pause");
        btn.classList.remove("play");
    }else{
         activeSong.pause();
        btn.classList.remove("pause");
        btn.classList.add("play");
    }
        
}

