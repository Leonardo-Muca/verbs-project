const verbs = [
    'open',
    'close',
    'sing',
    'run',
    'play'
]

const verbos = [
    'abrir',
    'cerrar',
    'cantar',
    'correr',
    'jugar'
]

var foo = verbs.map(function (item) {
    return '<li>' + item + '</li>'
})
document.getElementById("foo").innerHTML = foo;



// querySelector, innerHTML, getElement