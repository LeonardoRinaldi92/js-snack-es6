//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
//se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.

const array = ["leo", "gio", "simo", "luca", "marco", "matteo" ]

function getInMezzo(array, num1, num2) {
    if(Array.isArray(array)) {
        if(!isNaN(num1)) {
            if(!isNaN(num2)) {
                if(num1 >= 0) {
                    if(num2 < array.length) {
                        if(num1 < num2) {
                            if(num1 + 1 != num2) {
                                return array.filter((element, index) => index > num1 && index < num2 )
                            }
                            
                            return 'sono stati sceti due numeri vicini';
                        }

                        return num1 + ' ' + 'è più grande di' + ' ' + num2;
                    }

                    return num2 + ' ' + "è più grande degli elementi compresi nell'array";
                }

                return num1 + ' ' + 'è minore di 0';
            }

            return num2 + ' ' + 'non è un numero';
        }

        return num1 + ' ' + 'non è un numero';
    }

    return 'il primo elemento passato non è un array';
}

 let nuovoArray = getInMezzo(array, 1, 2);

 console.log(nuovoArray);

 //&& num1 < num2 && num2 < array.length 