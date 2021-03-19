var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value){
    var temp = {...object};
    if(prop !== "tracks" && value !== ""){
        temp[id].artist = value;
    } else if (prop === "tracks" && !temp[id].hasOwnProperty('tracks')){
        var temp1 = [];
        temp1.push(value);
        temp[id].tracks = temp1;
    } else if (prop === "tracks" && value !== ""){
        temp[id].tracks.push(value);
    } else if (value === "" && prop === "artist"){
        delete temp[id].artist;
    }else if (value === "" && prop === "tracks"){
        delete temp[id].tracks;
    }else if (value === "" && prop === "album"){
        delete temp[id].album;
    }

    return temp;
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
module.exports = updateRecords;