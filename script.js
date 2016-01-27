
var dats = ["hello", "hell", "he", "hel", "hatchit", "hhh"];
console.log(dats);

function trun() {
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

function run() {
    
    var preitem = document.getElementById("search").value;
    document.getElementById("search").value = "";
    
    var item = preitem.split(' ').join('+'); 
    
    console.log(item);
    
    var search = new XMLHttpRequest();
    var url = "http://omdbapi.com/?"
    
    var vars = "t="+item+"&plot=short&r=json";
    search.open("GET", url+vars, true);
    //search.setRequestHeader("Content-type",   "application/x-www-form-urlencoded");
    
    console.log(url+vars);
    
    search.onreadystatechange = function () {
        if(search.readyState == 4 && search.status == 200) {
            var return_data = search.responseText;
            console.log(return_data);
            
            var obj = JSON.parse(return_data);
            
            console.log("Title = " + obj.Title);
            console.log("Year = " + obj.Year);
            console.log("Poster - " + obj.Poster);
            
            //document.getElementById("result").innerHTML = preitem + "<br><br>" + "<img id=\"\" src=\"" + obj.Poster + "\">" + "<br><br>" + return_data;
            
            var add = new Film(preitem);
            add.init();
        }
    }
        search.send(vars);
    
} 

function Film (name) {
    this.name = name;
    this.init = function() {
        var result = document.getElementById("result");
        
        //   // Clear other results
        //while ( result.firstChild ) result.removeChild( result.firstChild );
        
        var film = document.createElement('div');
        film.id = this.name;
        
        film.style.width = "100%";
        film.style.height = "20%";
        film.style.border = "red solid 2px";
        film.style.paddingLeft = "10%";
        film.style.textAlign = "left";
        film.style.paddingTop = "1%";
        
        result.insertBefore(film, result.firstChild);
        var film = document.getElementById(this.name);
        film.innerHTML = this.name;
        
        
    }
    this.none = function() {
        var result = document.getElementById("result");
        
        var film = document.createElement('div');
        film.id = "none";
        
        film.style.width = "100%";
        film.style.height = "20%";
        film.style.border = "red solid 2px";
        film.style.paddingLeft = "10%";
        film.style.textAlign = "left";
        film.style.paddingTop = "1%";
        
        result.insertBefore(film, result.firstChild);
        
        var film = document.getElementById(film.id);
        film.innerHTML = "No results found";
        
    }
    
}
    
