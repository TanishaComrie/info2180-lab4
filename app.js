window.onload = function (){
    document.getElementById("Search").addEventListener("click", Search);   
}


function Search(){
    var name = document.getElementById("name").value;
    var results = document.getElementById("result");
    var sent = "http://localhost/info2180-lab4/superheroes.php?query=" + encodeURIComponent(name);
    fetch(sent)
    .then(response => response.text())
    .then(data => {
       results.innerHTML= data;
    })
    .catch(error => {
        alert("Error: " + error.message);
    })
}






