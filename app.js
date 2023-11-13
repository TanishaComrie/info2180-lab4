window.onload = function (){
    document.getElementById("Search").addEventListener("click", Search);   
}


function Search(){
    fetch("http://localhost/info2180-lab4/superheroes.php")
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(error => {
        alert("Error: " + error.message);
    })
}



