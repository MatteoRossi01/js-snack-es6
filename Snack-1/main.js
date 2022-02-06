/* Creo l'array degli oggetti  */
const tipiBici = [

    {
        nome: 'Atala',
        peso: '6.8 kg'
    },
    {
        nome: 'Argon 18',
        peso: '5.8 kg'
    },
    {
        nome: 'Bixxis',
        peso: '7.5 kg'
    },
    {
        nome: 'Cinelli',
        peso: '3.2 kg'
    },
    {
        nome: 'Cyfac',
        peso: '6.4 kg'
    },

]

let bici = calcoloPesoMinore(tipiBici); 

document.getElementById('bici').innerHTML = 'La bici con il minor peso è : ' + bici;

function calcoloPesoMinore() {

    const valorePeso = []
    let pesoMinore;
    let biciLeggera;
    
    /* Ciclo che inserisce all'interno dell'array "valorePeso" il peso di tutti gli oggetti */
    for (let i = 0; i < tipiBici.length; i++) {
        let {peso} = tipiBici[i];
        valorePeso.push(peso)
    } 

    for (let i = 1; i < valorePeso.length; i++) {
        if (valorePeso[i] < valorePeso[i - 1]) {
            pesoMinore = valorePeso[i];
        } else {
            pesoMinore = valorePeso[i - 1];
        }
        
    }
    for (let i = 0; i < tipiBici.length; i++) {
        if (tipiBici[i].peso == pesoMinore) {
            biciLeggera = tipiBici[i].nome
        }
    }
    return biciLeggera;
}









