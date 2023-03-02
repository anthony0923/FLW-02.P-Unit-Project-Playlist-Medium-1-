// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.


  //let imageUrl = ["https://i1.sndcdn.com/artworks-ExBPZex5bu6M-0-t500x500.jpg", "https://i.discogs.com/82WLTKcIeaIkCjJudN_L6VjOUBO8Go5muqo0tvgjVY4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MzAz/NDctMTQ4MDU2MTcy/Ny01MDIxLmpwZWc.jpeg", "https://www.the360mag.com/wp-content/uploads/2022/06/IMG-2564-e1654763596144.jpg", "https://i.ytimg.com/vi/pa5E4uA3ALY/maxresdefault.jpg"];

  //let artists = ["J. Cole", "The Weeknd", "DannyLux", "Brent Faiyas"];

  //let songLinks = ["https://www.youtube.com/watch?v=oigcRpBOoZk", "https://www.youtube.com/watch?v=QLCpqdqeoII", "https://youtu.be/ExjDazHDFmA ", "https://youtu.be/TWqUtor6Gdc"];

  //let songNames = ["Deja Vu", "Die For you", "Junto A Ti", "Trust"]


//task 8


      /*add.onclick = function addSongInfo() {
      // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
      
      
        let imageInput = document.querySelector(".image").value
        let songInput = document.querySelector(".song-name").value
        let artistInput = document.querySelector(".artist").value
        let linkInput = document.querySelector(".song-link").value
        
      // task 10: use `.push()` to add each input value to the correct array.
        imageUrl.push(imageInput);
        artists.push(artistInput);
        songLinks.push(songInput);
        songNames.push(linkInput);
      };*/


    //add.onclick = function(){
    
      //let imageInput = document.querySelector(".image").value
      //let songInput = document.querySelector(".song-name").value
      //let artistInput = document.querySelector(".artist").value
      //let linkInput = document.querySelector(".song-link").value
    
      //imageUrl.push(imageInput);
     // artists.push(artistInput);
     // songLinks.push(songInput);
     // songNames.push(linkInput);
      
    //};

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link

let artist1 = {
  name: "J. Cole",
  song: "Deja Vu",
  link: "https://www.youtube.com/watch?v=oigcRpBOoZk",
  imageUrl: "https://i1.sndcdn.com/artworks-ExBPZex5bu6M-0-t500x500.jpg",
};

let artist2 = {
  name: "The Weeknd",
  song: "Die For You",
  link: "https://www.youtube.com/watch?v=QLCpqdqeoII",
  imageUrl: "https://i.discogs.com/82WLTKcIeaIkCjJudN_L6VjOUBO8Go5muqo0tvgjVY4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk0MzAz/NDctMTQ4MDU2MTcy/Ny01MDIxLmpwZWc.jpeg",
};

let artist3 = {
  name: "DannyLux",
  song: "Junto A Ti",
  link: "https://youtu.be/ExjDazHDFmA",
  imageUrl: "https://www.the360mag.com/wp-content/uploads/2022/06/IMG-2564-e1654763596144.jpg",
};

let artist4 = {
  name: "Brent Faiyes",
  song: "Trust",
  link: "https://youtu.be/TWqUtor6Gdc",
  imageUrl: "https://i.ytimg.com/vi/pa5E4uA3ALY/maxresdefault.jpg",
};

// task 14: create an array that stores all of the objects.

let artistList = [artist1, artist2, artist3, artist4];

for(let i = 0; i < artistList.length; i++){
  let song = artistList[i];
  //let name = song.name 

  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let artists1 = song.name;
  paragraph1.innerHTML = artists1;
  paragraph2.appendChild(paragraph1);
  displayArtist.appendChild(paragraph2);
  
  let paragraph3 = document.createElement("p");
  let paragraph4 = document.createElement("p");
  let songNames1 = song.song;
  paragraph3.innerHTML = songNames1;
  paragraph4.appendChild(paragraph3);
  displaySong.appendChild(paragraph4);

  
  let image = document.createElement("img");
  image.src = song.image;
  let paragraph7 = document.createElement("p");
  paragraph1.appendChild(image);
  displayImage.appendChild(paragraph7);
  
  let paragraph5 = document.createElement("p");
  let paragraph6 = document.createElement("p");
  let songLinks1 = song.link;
  paragraph5.innerHTML = songLinks1;
  paragraph6.appendChild(paragraph5);
  displayLink.appendChild(paragraph6);
  
};

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.

add.onclick = function() {
  
  let imageInput = document.querySelector(".image").value
  let songInput = document.querySelector(".song-name").value
  let artistInput = document.querySelector(".artist").value
  let linkInput = document.querySelector(".song-link").value

  artistlist.push({
    image: imageInput,
    song: songInput,
    link: artistInput,
    imageUrl: linkInput,
  });
};






/*for (let i = 0; i < imageUrl.length; i++){
  let image = document.createElement("img");
  image.src = imageUrl[i];
  let paragraph1 = document.createElement("p");
  paragraph1.appendChild(image);
  displayImage.appendChild(paragraph1);
};

for (let i = 0; i < songNames.length; i++){
  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let songNames1 = songNames[i];
  paragraph1.innerHTML = songNames1;
  paragraph2.appendChild(paragraph1);
  displaySong.appendChild(paragraph2);
};

for (let i = 0; i < artists.length; i++){
  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let artists1 = artists[i];
  paragraph1.innerHTML = artists1;
  paragraph2.appendChild(paragraph1);
  displayArtist.appendChild(paragraph2);
};

for (let i = 0; i < songLinks.length; i++){
  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let songLinks1 = songLinks[i]
  paragraph1.innerHTML = songLinks1;
  paragraph2.appendChild(paragraph1);
  displayLink.appendChild(paragraph2);
};*/















/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
