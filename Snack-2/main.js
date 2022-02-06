
const squadre = [

    {
        nome: 'Juventus',
        punti: '0',
        falli: '0'
    },
    {
        nome: 'Napoli',
        punti: '0',
        falli: '0'
    },
    {
        nome: 'Cagliari',
        punti: '0',
        falli: '0'
    },
    {
        nome: 'Milan',
        punti: '0',
        falli: '0'
    },
    {
        nome: 'Torino',
        punti: '0',
        falli: '0'
    },

]


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

const squadraFalli = []  

for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = randomNumber(10, 60);
    squadre[i].falli = randomNumber(1, 15)

    const {nome, falli} = squadre[i];

    squadraFalli.push({nome, falli})
}

console.log(squadre)    
console.log(squadraFalli)








