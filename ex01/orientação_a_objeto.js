var ingrendiente = [
    'mel','água','sal','mostarda'
]
ingrendiente.sort()

ingrendiente.forEach(function(el){
    console.log(el.charAt(0).toUpperCase() + el.substr(1))

})
