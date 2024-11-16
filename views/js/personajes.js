
const personajes = [
    {
        "nombre": "N. Tropy",
        "biografia": "El maestro del tiempo que ha intentado conquistar el universo con su control del tiempo.",
        "velocidad": 6,
        "aceleracion": 6,
        "giro": 4,
        "imagen": "../img/personajes/ntropy.gif"
    },
    {
        "nombre": "Crash Bandicoot",
        "biografia": "Crash es el protagonista de la serie, un bandicut genéticamente modificado que se enfrenta al malvado Doctor Neo Cortex.",
        "velocidad": 5,
        "aceleracion": 5,
        "giro": 5,
        "imagen": "../img/personajes/crash.gif"
    },
    {
        "nombre": "Dr. Neo Cortex",
        "biografia": "Cortex es el archienemigo de Crash y el creador de muchos de los personajes en el universo de Crash Bandicoot.",
        "velocidad": 5,
        "aceleracion": 5,
        "giro": 5,
        "imagen": "../img/personajes/cortex.gif"
    },
    {
        "nombre": "Tiny Tiger",
        "biografia": "Un tigre mutante con una fuerza increíble, Tiny es uno de los secuaces más leales de Cortex.",
        "velocidad": 7,
        "aceleracion": 3,
        "giro": 3,
        "imagen": "../img/personajes/tiny.gif"
    },
    {
        "nombre": "Coco Bandicoot",
        "biografia": "La hermana de Crash, Coco, es muy inteligente y usa sus habilidades tecnológicas para ayudar a derrotar a Cortex.",
        "velocidad": 4,
        "aceleracion": 7,
        "giro": 4,
        "imagen": "../img/personajes/coco.gif"
    },
    {
        "nombre": "Pinstripe",
        "biografia": "Pinstripe es un gangster estilo mafioso y un enemigo recurrente de Crash.",
        "velocidad": 4,
        "aceleracion": 4,
        "giro": 7,
        "imagen": "../img/personajes/pinstripe.gif"
    },
    {
        "nombre": "Ripper Roo",
        "biografia": "Ripper Roo es un canguro loco que ama hacer explotar cosas. Ha sido un enemigo recurrente de Crash.",
        "velocidad": 3,
        "aceleracion": 4,
        "giro": 7,
        "imagen": "../img/personajes/ripper_roo.gif"
    },
    {
        "nombre": "Dr. N. Gin",
        "biografia": "N. Gin es el científico y mecánico de Cortex. Tiene un cohete incrustado en la cabeza, consecuencia de un accidente de laboratorio.",
        "velocidad": 4,
        "aceleracion": 7,
        "giro": 4,
        "imagen": "../img/personajes/ngin.gif"
    },
    {
        "nombre": "Dingodile",
        "biografia": "Dingodile es un híbrido entre un dingo y un cocodrilo. Usa un lanzallamas y es uno de los enemigos más temibles de Crash.",
        "velocidad": 7,
        "aceleracion": 3,
        "giro": 3,
        "imagen": "../img/personajes/dingodile.gif"
    },
    {
        "nombre": "Polar",
        "biografia": "El adorable oso polar mascota de Crash, que es pequeño y tiene un gran giro, pero es un poco lento.",
        "velocidad": 3,
        "aceleracion": 4,
        "giro": 7,
        "imagen": "../img/personajes/polar.gif"
    },
    {
        "nombre": "Pura",
        "biografia": "Pura es el tigre mascota de Coco. Es pequeño y rápido, con un excelente giro.",
        "velocidad": 3,
        "aceleracion": 4,
        "giro": 7,
        "imagen": "../img/personajes/pura.gif"
    },
    {
        "nombre": "Papu Papu",
        "biografia": "El líder de una tribu nativa y uno de los primeros jefes que Crash enfrentó. Papu es lento pero tiene mucha fuerza.",
        "velocidad": 7,
        "aceleracion": 3,
        "giro": 3,
        "imagen": "../img/personajes/papu.gif"
    },
    {
        "nombre": "Komodo Joe",
        "biografia": "Uno de los hermanos Komodo, expertos en espadas y mercenarios al servicio de Cortex.",
        "velocidad": 6,
        "aceleracion": 4,
        "giro": 4,
        "imagen": "../img/personajes/komodo.gif"
    },
    {
        "nombre": "Pinguin",
        "biografia": "Uno de los hermanos Komodo, expertos en espadas y mercenarios al servicio de Cortex.",
        "velocidad": 6,
        "aceleracion": 4,
        "giro": 4,
        "imagen": "../img/personajes/penta.gif"
    },
    {
        "nombre": "Fake Crash",
        "biografia": "Una versión falsa y cómica de Crash, creada para burlarse del protagonista.",
        "velocidad": 5,
        "aceleracion": 5,
        "giro": 5,
        "imagen": "../img/personajes/fake_crash.gif"
    }
];

/* JavaScript */

function mostrarListaPersonajes() {
    const listaContainer = document.getElementById('character-list');
    personajes.forEach((personaje, index) => {
        const btn = document.createElement('button');
        btn.textContent = personaje.nombre;
        btn.addEventListener('click', () => mostrarInformacionPersonaje(index));
        listaContainer.appendChild(btn);
    });
}

function mostrarInformacionPersonaje(index) {
    const personaje = personajes[index];
    document.getElementById('character-name').textContent = personaje.nombre;
    document.getElementById('character-name-ex').textContent = personaje.nombre;
    document.getElementById('character-biography').textContent = personaje.biografia;
    document.getElementById('character-speed').textContent = personaje.velocidad;
    document.getElementById('character-acceleration').textContent = personaje.aceleracion;
    document.getElementById('character-turn').textContent = personaje.giro;
    document.getElementById('character-img').src = personaje.imagen;
}

mostrarListaPersonajes();