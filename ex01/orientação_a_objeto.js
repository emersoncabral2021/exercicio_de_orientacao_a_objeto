import modificador from './modificador.js';
import ingrendientes from './ingredientes.js';


let ingredientesOrdenados = modificador.ordenar(ingrendientes, 'nome')
let conteinerIngredientes = document.getElementById('conteiner-ingredientes')

for(let ingrediente of ingredientesOrdenados){
    let textHTML = `<div class="ingredientes">
    <img src="img/${ingrediente.img}" alt="">
    <p class="nome-ingrediente">${ingrediente.nome}</p>
</div>`;

conteinerIngredientes.innerHTML += textHTML
}









/*
var resultadoCapitalizar = modificador.capitalizar(ingrendientes)
var resultadoOrdenar = modificador.ordenar(resultadoCapitalizar)


function ordenado(){
    return ingrendiente.sort(function(a,b){
    return a.localeCompare(b)
})
}

function capitalizar(){
    ordenado()    
    ingrendiente.forEach(function(el){
    console.log(el.charAt(0).toUpperCase() + el.substr(1))

})  
}
*/

