var IronMan = [
    "Iron Man",
    "El incre\xedble Hulk",
    "Iron Man 2",
    "Los Vengadores",
    "Iron Man 3",
    "Los Vengadores: La era de Ultr\xf3n",
    "Capit\xe1n Am\xe9rica: Guerra Civil",
    "Spider-Man: Homecoming",
    "Los Vengadores: Infinity War",
    "Los Vengadores: End Game",
    "Spider-Man: Lejos de casa"
];
var CapitanAmerica = [
    "Capit\xe1n Am\xe9rica: El primer vengador",
    "Los Vengadores",
    "Thor: The Dark World",
    "Captain America: The Winter Soldier",
    "Los Vengadores: La era de Ultr\xf3n",
    "Ant-Man",
    "Capit\xe1n Am\xe9rica: Guerra Civil",
    "Spider-Man: Homecoming",
    "Los Vengadores: Infinity War",
    "Capitana Marvel",
    "Los Vengadores: End Game",
    "Spider-Man: Lejos de casa", 
];
var BlackWidow = [
    "Iron Man 2",
    "Los Vengadores",
    "Captain America: The Winter Soldier",
    "Los Vengadores: La era de Ultr\xf3n",
    "Capit\xe1n Am\xe9rica: Guerra Civil",
    "Spider-Man: Homecoming",
    "Thor: Ragnarok",
    "Los Vengadores: Infinity War",
    "Captain Marvel",
    "Los Vengadores: End Game",
    "Black Widow", 
];
var BlackPanther = [
    "Capit\xe1n Am\xe9rica: Guerra Civil",
    "Spider-Man: Homecoming",
    "Black Panther",
    "Los Vengadores: Infinity War",
    "Los Vengadores: End Game",
    "Black Widow", 
];
var Thor = [
    "Thor",
    "Capit\xe1n Am\xe9rica: El primer vengador",
    "Los Vengadores",
    "Iron Man 3",
    "Thor: The Dark World",
    "Los Vengadores: La era de Ultr\xf3n",
    "Doctor Strange",
    "Thor: Ragnarok",
    "Los Vengadores: Infinity War",
    "Los Vengadores: End Game", 
];
var Hulk = [
    "El incre\xedble Hulk",
    "Los Vengadores",
    "Iron Man 3",
    "Los Vengadores: La era de Ultr\xf3n",
    "Thor: Ragnarok",
    "Los Vengadores: Infinity War",
    "Captain Marvel",
    "Los Vengadores: End Game",
    "Shang-Chi y la Leyenda de los diez Anillos"
];
// Listado de apariciones cinematográficas:
function getMovies(character) {
    var movies = character;
    var ul = document.getElementById("movieList");
    for(var i = 0; i < movies.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(movies[i]));
        ul.appendChild(li);
    }
}

//# sourceMappingURL=category.8f0c9192.js.map
