window.onload = function (){
    document.getElementById("Search").addEventListener("click", Search);   
}


function Search(){
    var name = document.getElementById("name").value;
    var sent = "http://localhost/info2180-lab4/superheroes.php?query=" + String(name);
    fetch(sent)
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
}






