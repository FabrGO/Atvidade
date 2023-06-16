await fetch("https://api.github.com/users/FabrGO")
    .then((response) => response.json())
    .then((json) => console.log(json))
    