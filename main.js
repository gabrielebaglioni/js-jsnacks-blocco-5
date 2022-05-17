const car = [{
        marca: seat,
        modello: mii,
        alimentazione: metano
    },
    {
        marca: wolsvagen,
        modello: up,
        alimentazione: benzina
    }, {
        marca: alfaromeo,
        modello: giulietta,
        alimentazione: disel
    }, {
        marca: bmv,
        modello: a8,
        alimentazione: metano
    }, {
        marca: scoda,
        modello: clever,
        alimentazione: benzina
    }, {
        marca: citroen,
        modello: c4,
        alimentazione: disel
    }, {
        marca: suzuki,
        modello: jimmy,
        alimentazione: metano
    }, {
        marca: jeep,
        modello: renegade,
        alimentazione: benzina
    }, {
        marca: smart,
        modello: smart,
        alimentazione: disel
    }, {
        marca: ford,
        modello: fiesta,
        alimentazione: metano
    },

];
const carMetano = [];
const carBenzina = [];
const carDisel = [];

const Metano = car.filter(car => car.alimentazione === 'metano');
const Benzina = car.filter(car => car.alimentazione === 'benzina');
const Disel = car.filter(car => car.alimentazione === 'disel');