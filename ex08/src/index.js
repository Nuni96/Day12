var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Phyton", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop){
    var temp = "";
    for( var i = 0; i < 4; i++){
        if(name === contacts[i].firstName && prop === 'firstName'){
            temp = name;
            return contacts[i].firstName;
        }else if(name === contacts[i].firstName && prop === 'lastName'){
            temp = name;
            return contacts[i].lastName;
        }else if(name === contacts[i].firstName && prop === 'number'){
            temp = name;
            return contacts[i].number;
        }else if(name === contacts[i].firstName && prop === 'likes'){
            temp = name;
            return contacts[i].likes;
        }else if (name === contacts[i].firstName){
            temp=name;
        }
        
    }
    if(temp === ""){
        return "No such contact";
    }else if(prop !== 'firstName' || prop !=='lastName' || prop !== 'number' || prop !== 'likes'){
        return "No such property";
    }
    

}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));
module.exports = lookUpProfile;