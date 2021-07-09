import modificador from './modificador.js';

var ingrendiente = [
    'mel','água','sal','mostarda'
]

var resultadoCapitalizar = modificador.capitalizar(ingrendiente)
var resultadoOrdenar = modificador.ordenar(resultadoCapitalizar)


console.log(resultadoCapitalizar)
console.log(resultadoOrdenar)


/*function ordenado(){
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
capitalizar()

*/

