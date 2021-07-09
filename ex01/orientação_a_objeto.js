var ingrendiente = [
    'mel','água','sal','mostarda'
]

function ordenado(){
    ingrendiente.sort(function(a,b){
    return a.localeCompare(b)
})

ingrendiente.forEach(function(el){
    console.log(el.charAt(0).toUpperCase() + el.substr(1))

})

}
ordenado()