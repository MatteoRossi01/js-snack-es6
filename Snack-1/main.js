/* Creo l'array degli oggetti  */
const tipiBici = [

    Bici1 = {
        'nome': 'Atala',
        'peso': '6.8 kg'
    },

    Bici2 = {
        'nome': 'Argon 18',
        'peso': '5.8 kg'
    },

    Bici3 = {
        'nome': 'Bixxis',
        'peso': '7.5 kg'
    },

    Bici4 = {
        'nome': 'Cinelli',
        'peso': '9.2 kg'
    },

    Bici5 = {
        'nome': 'Cyfac',
        'peso': '6.4 kg'
    },

]

let {nome, peso} = Bici2;

console.log(nome);
console.log(peso);

document.getElementById('bici').innerHTML = `La bici con minor peso è: ${nome} con un peso di: ${peso}.`









