let squadre = [
    {
        nome: "roma",
        puntifatti: 0,
        falli: 0,
    },
    {
        nome: "lazio",
        puntifatti: 0,
        falli: 0,
    },
    {
        nome: "milan",
        puntifatti: 0,
        falli: 0,
    },
    {
        nome: "inter",
        puntifatti: 0,
        falli: 0,
    }
];

function numeroRandom() {
    return Math.floor(Math.random()* 100 )
}

let nuovoArray = [];

squadre.forEach((element) => {
    element.puntifatti = numeroRandom();
    element.falli = numeroRandom();
    console.log(element);

    nuovoArray.push({nome: element.nome, falli: element.falli})
} )

console.log(nuovoArray);



