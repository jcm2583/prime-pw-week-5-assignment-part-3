console.log('***** Music Collection *****')

let collection = [];
// Creating a function to music albums into the collection array
function addToCollection (title, artist, yearPublished) {
  let newAlbum = {title, artist, yearPublished, };
  collection.push(newAlbum);
  return newAlbum;
}

// Adding albums to the collection array
console.log(addToCollection('MTV Unplugged in New York', 'Nirvana', '1994'));
console.log(addToCollection('Blink-182', 'Blink-182', '2003' ));
console.log(addToCollection('Kids in Love', 'Kygo', '2017'));
console.log(addToCollection('Folklore', 'Taylor Swift', '2020'));
console.log(addToCollection('Boston', 'Boston', '1976'));
console.log(addToCollection('Zaba', 'Glass Animals', '2014'));
// Testing that everything was added into the collection array
console.log(collection);

// Creating a function to show each album in the collection
function showCollection (array) {
  console.log('The length of the array is', array.length);
  for (let i=0; i<array.length; i++) {
  console.log(array[i].title, 'by', array[i].artist, 'published in', array[i].yearPublished);
  }
}
// Testing the showCollection function
showCollection(collection);

// Creating a function to search the collection by artists
function findByArtist (artist) {
  let searchResults = [];
  for (let i=0; i<collection.length; i++) {
    if (artist == collection[i].artist ) {
    searchResults.push(collection[i]);
    console.log(searchResults);
    }
  }
    return searchResults;
}
// Testing findByArtist function
findByArtist('Nirvana');
// Testing findByArtist with artist that isn't included to return an empty array
console.log(findByArtist('ZZ Top'));
// Adding another album of same artist to test that both albums are returned
addToCollection('Nevermind', 'Nirvana', '1991');
findByArtist('Nirvana');

// Stretch goals
