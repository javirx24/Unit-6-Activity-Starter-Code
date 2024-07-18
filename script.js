const submitRequest = (event) => {
// get form inputs
const name = document.getElementById('fname');
const songname = document.getElementById('songName');
const artistname = document.getElementById('artist-name');
event.preventDefault ();
//Display song request
  const songRequest = `${name.value} has requested ${songname.value} by ${artistname.value}`;
  console.log(songRequest);
  
}


// Get form inpiuts
const form = document.getElementById("request-form");

// Add event listener to form
form.addEventListener("submit", submitRequest);


//Display song requests
