var form = document.querySelector("form");

form.addEventListener('submit' , function(e) {

    e.preventDefault();

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let name = document.getElementById("name") ;

    urlForm = urlForm + this.name.value

    urlForm = urlForm.toLocaleLowerCase();

    let answer = document.getElementById("content");

    let image = document.getElementById("imgPokemon");

    let html = '';

    fetch(urlForm)
    .then(resp => resp.json())
    .then(function(data) {
        console.log(data)
        html = "Nome " + toUpperText(data.name) + "<br>"
        html = html + "Type: " + toUpperText(data.types[0].type.name)
        answer.innerHTML = html


        image.innerHTML = "<img src='" + data.sprites.front_default +"'> <img src=' " + data.sprites.back_default +" '>"

    })
    .catch(function(err) {
        if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html = 'Pokemon não encontrado ;~;'
        }else {
            html = "Erro:" + err
        }
        answer.innerHTML = html
    })


})

function toUpperText(val) {
    return val[0].toUpperCase() + val.substr(1)
}