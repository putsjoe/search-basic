
var dats = ["hello", "hell", "he", "hel", "hatchit", "hhh"];
console.log(dats);

function run() {
    var search = document.getElementById("search").value.toLowerCase();
    
    var datsLength = dats.length;
    
    for (var i = 0; i < datsLength; i++) {
        var dt = dats[i];
        
        var schar = search;
        var dchar = dt;
        
        var ssize = search.length;
        var dsize = dt.length;
        
        if (schar == dchar && ssize == dsize)
        {
                    console.log(search);
                    var found = new Film(search);
                    found.init();
        }   
    }  
} 

function format(film) {
        film.style.width = "100%";
        film.style.height = "20%";
        film.style.border = "red solid 2px";
        film.style.paddingLeft = "10%";
        film.style.textAlign = "left";
        film.style.paddingTop = "1%";    
}

function Film (name) {
    this.name = name;
    this.init = function() {
        var result = document.getElementById("result");
        
        var film = document.createElement('div');
        film.id = this.name;
        format(film);
        
        result.insertBefore(film, result.firstChild);
        var film = document.getElementById(this.name);
        film.innerHTML = this.name;
        
        
    }
    this.none = function() {
        var result = document.getElementById("result");
        
        var film = document.createElement('div');
        film.id = "none";
        format(film);
        
        result.insertBefore(film, result.firstChild);
        
        var film = document.getElementById(film.id);
        film.innerHTML = "No results found";
        
    }
    
}
    
