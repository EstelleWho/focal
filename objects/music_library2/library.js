const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (const playlistId in library.playlists) { // for...in loop to go over each list
              const playlist = library.playlists[playlistId];
              const playlistName = playlist.name; // retrieve from the given info 
              const playlistTrackCount = playlist.tracks.length; // the nb of tracks
              console.log(`${playlistId}: ${playlistName} - ${playlistTrackCount} track${playlistTrackCount !== 1 ? 's' : ''}`);
            }
          };
printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

       const tracks = library.tracks;
            
       for (const trackId in tracks) {
              const track = tracks[trackId];
              const { id, name, artist, album } = track;
              console.log(`${id}: ${name} by ${artist} (${album})`);
       }
};
printTracks();
       


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       
       for (const trackId of playlist.tracks) {
         const track = library.tracks[trackId]; // retrieve from library
         console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
     };



// adds an existing track to an existing playlist: USE .PUSH
const addTrackToPlaylist = function(trackId, playlistId) {
       const track = library.tracks[trackId]; // retrive  track from library
       const playlist = library.playlists[playlistId]; // retrieve playlist
       playlist.tracks.push(trackId);
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) { //3 parameters
       const newTrackId = generateUid(); // new ID generated using previous function
       const newTrack = { // Creating new track object
         id: newTrackId, 
         name: name, //the parameters
         artist: artist,
         album: album
       };
       library.tracks[newTrackId] = newTrack; // Adding new track
}


// adds a playlist to the library
const addPlaylist = function(name) {
       const newPlaylistId = generateUid(); // you get a new ID for playlist
       const newPlaylist = { // get new playlist object
         id: newPlaylistId, //the parameters
         name: name,
         tracks: []
       };
       
       library.playlists[newPlaylistId] = newPlaylist; // Add new playlist to the lib
     };


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}