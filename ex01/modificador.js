function fncapitalizarNovo(colecao,atributo){
    if(typeof coleção[0] == 'object'){
        var resultado = colecao.map(function(obj){
            var letraInicial = obj[atributo].charAt(0).toUpperCase()
            var restoTexto = obj[atributo].slice(1)    
            
            obj[atributo] = letraInicial + restoTexto
            return obj;
        });
    }
}

function fncapitalizar(vetor){
    var modificar = []


    for(let i = 0;i < vetor.length;i++ ){
        var letraInicial = vetor[i].charAt(0).toUpperCase()
        var restoTexto = vetor[i].slice(1)
        var resultado = letraInicial + restoTexto

        modificar[i] = resultado 
    }

    return modificar
}

function fnordenar(vetor){
    return vetor.sort(function(a,b){
        return a.localeCompare(b)
    })
}
//para importa mais de duas função capitalizar:capitalizar => nome da chave: a função vai ser inportada


export default {
    capitalizar:fncapitalizar,
    ordenar:fnordenar,
    capitalizarNovo:fncapitalizarNovo

}