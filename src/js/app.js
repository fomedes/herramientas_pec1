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
    "Spider-Man: Lejos de casa"
]

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
]

var BlackWidow = [
    "Iron Man 2",
    "Los Vengadores",
    "Captain America: The Winter Soldier",
    "Los Vengadores: La era de Ultrón",
    "Capitán América: Guerra Civil",
    "Spider-Man: Homecoming",
    "Thor: Ragnarok",
    "Los Vengadores: Infinity War",
    "Captain Marvel",
    "Los Vengadores: End Game",
    "Black Widow",
]

var BlackPanther = [
    "Capitán América: Guerra Civil",
    "Spider-Man: Homecoming",
    "Black Panther",
    "Los Vengadores: Infinity War",
    "Los Vengadores: End Game",
    "Black Widow",
]

var Thor = [
    "Thor",
    "Capitán América: El primer vengador",
    "Los Vengadores",
    "Iron Man 3",
    "Thor: The Dark World",
    "Los Vengadores: La era de Ultrón",
    "Doctor Strange",
    "Thor: Ragnarok",
    "Los Vengadores: Infinity War",
    "Los Vengadores: End Game",
]

var Hulk = [
    "El increíble Hulk",
    "Los Vengadores",
    "Iron Man 3",
    "Los Vengadores: La era de Ultrón",
    "Thor: Ragnarok",
    "Los Vengadores: Infinity War",
    "Captain Marvel",
    "Los Vengadores: End Game",
    "Shang-Chi y la Leyenda de los diez Anillos"
]


// Listado de apariciones cinematográficas:
function getMovies(character){
    var movies = character;

    var ul = document.getElementById("movieList");
    
    
    for(var i = 0; i < movies.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(movies[i]));
        ul.appendChild(li);
    }
}
