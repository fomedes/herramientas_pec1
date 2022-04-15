var IronMan = [
    "Iron Man",
    "El increíble Hulk",
    "Iron Man 2",
    "Los Vengadores",
    "Iron Man 3",
    "Los Vengadores: La era de Ultrón",
    "Capitán América: Guerra Civil",
    "Spider-Man: Homecoming",
    "Los Vengadores: Infinity War",
    "Los Vengadores: End Game",
    "Spider-Man: Lejos de casa", 
];
var CapitanAmerica = [
    "Capitán América: El primer vengador",
    "Los Vengadores",
    "Thor: The Dark World",
    "Captain America: The Winter Soldier",
    "Los Vengadores: La era de Ultrón",
    "Ant-Man",
    "Capitán América: Guerra Civil",
    "Spider-Man: Homecoming",
    "Los Vengadores: Infinity War",
    "Capitana Marvel",
    "Los Vengadores: End Game",
    "Spider-Man: Lejos de casa", 
];
// Listado de apariciones cinematográficas:
function getMovies(character) {
    var movies = character;
    var ul = document.getElementById("movieList");
    for(var i = 0; i < movies.length; i++){
        // Create the list item:
        var li = document.createElement("li");
        // Set its contents:
        li.appendChild(document.createTextNode(movies[i]));
        // Add it to the list:
        ul.appendChild(li);
    }
}

//# sourceMappingURL=category.8f0c9192.js.map
