const biciclette = [
    {
        nome: 'bellabici',
        peso: 18
    },
    {
        nome: 'bicidacorsa',
        peso: 3
    },
    {
        nome: 'bmx',
        peso: 8
    }
]



let bicipiuleggera = getBiciLeggera(biciclette);

function getBiciLeggera(biciclette) {
    let biciLeggera;

    biciclette.forEach( (element) => {
        const { nome, peso} = element;

        if (!biciLeggera || biciLeggera.peso > peso) {
            biciLeggera = element
        }
    });

    return biciLeggera;
}



console.log(bicipiuleggera.nome, bicipiuleggera.peso + "Kg.");
