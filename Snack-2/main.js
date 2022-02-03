
let numeroPunti = Math.floor(Math.random()*50)

const squadre = [

    squadra1 = {
        'nome': 'Juventus',
        'punti': '0',
        'falli': '0'
    },

    squadra2 = {
        'nome': 'Napoli',
        'punti': '0',
        'falli': '0'
    },

    squadra3 = {
        'nome': 'Cagliari',
        'punti': '0',
        'falli': '0'
    },

    squadra4 = {
        'nome': 'Milan',
        'punti': '0',
        'falli': '0'
    },

    squadra5 = {
        'nome': 'Torino',
        'punti': '0',
        'falli': '0'
    },

]

/* Generazione numeri casuali per i punti */
squadra1.punti = Math.floor(Math.random()*40);
squadra2.punti = Math.floor(Math.random()*40);
squadra3.punti = Math.floor(Math.random()*40);
squadra4.punti = Math.floor(Math.random()*40);
squadra5.punti = Math.floor(Math.random()*40);

/* Generazione numeri casuali per i falli */
squadra1.falli = Math.floor(Math.random()*10);
squadra2.falli = Math.floor(Math.random()*10);
squadra3.falli = Math.floor(Math.random()*10);
squadra4.falli = Math.floor(Math.random()*10);
squadra5.falli = Math.floor(Math.random()*10);

console.log(squadre)



