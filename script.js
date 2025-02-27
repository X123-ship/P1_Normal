document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const resultadosUl = document.getElementById('resultados');

    const diccionario = [
        { palabraNativa: "hola", traduccion: "yaw" },
        { palabraNativa: "buenos días", traduccion: "allin punchaw" },
        { palabraNativa: "buenos días", traduccion: "allin paqarin" },
        { palabraNativa: "buenas tardes", traduccion: "allin sukhayay" },
        { palabraNativa: "buenas noches", traduccion: "allin ch'isiyay" },
        { palabraNativa: "buenas noches", traduccion: "allin tuta" },
        { palabraNativa: "como estas", traduccion: "imaynalla" },
        { palabraNativa: "hasta mañana", traduccion: "q'ayakama" },
        { palabraNativa: "hasta la noche", traduccion: "tutakama" },
        { palabraNativa: "hasta pasado mañana", traduccion: "minchaqama" },
        { palabraNativa: "hasta el otro año", traduccion: "watakama" },
        { palabraNativa: "hasta el otro mes", traduccion: "wak killakama" },
        { palabraNativa: "hasta otro dia", traduccion: "wak p'unchawkama" },
        { palabraNativa: "hasta que nos encontremos", traduccion: "tinkunakama" },
        { palabraNativa: "que te vaya bien", traduccion: "allin risuchuy" },
        { palabraNativa: "nos vemos", traduccion: "qhawana kunanchik kama" },
        { palabraNativa: "a dios", traduccion: "apup munayninkama" },
        { palabraNativa: "hasta otro encuentro", traduccion: "tinkunakama" },
        { palabraNativa: "gracias", traduccion: "yupaychani" },
        { palabraNativa: "si", traduccion: "ari" },
        { palabraNativa: "no", traduccion: "mana" },
        { palabraNativa: "de dónde", traduccion: "maymanta" },
        { palabraNativa: "vida", traduccion: "kawsay" },
        { palabraNativa: "amor", traduccion: "munay" },
        { palabraNativa: "agua", traduccion: "yaku" },
        { palabraNativa: "cielo", traduccion: "hanan" },
        { palabraNativa: "tierra", traduccion: "pacha" },
        { palabraNativa: "sol", traduccion: "inti" },
        { palabraNativa: "luna", traduccion: "killa" },
        { palabraNativa: "fuego", traduccion: "nina" },
        { palabraNativa: "estrella", traduccion: "chaska" },
        { palabraNativa: "montaña", traduccion: "urqu" },
        { palabraNativa: "piedra", traduccion: "rumi" },
        { palabraNativa: "flor", traduccion: "sisa" },
        { palabraNativa: "nieve", traduccion: "rit'i" },
        { palabraNativa: "viento", traduccion: "wayra" },
        { palabraNativa: "comida", traduccion: "mikhuna" },
        { palabraNativa: "hombre", traduccion: "runa" },
        { palabraNativa: "mujer", traduccion: "warmi" },
        { palabraNativa: "niño", traduccion: "wawa" },
        { palabraNativa: "padre", traduccion: "tayta" },
        { palabraNativa: "madre", traduccion: "mama" },
        { palabraNativa: "hermano", traduccion: "wayqe" },
        { palabraNativa: "hermana", traduccion: "ñaña" },
        { palabraNativa: "casa", traduccion: "wasi" },
        { palabraNativa: "camino", traduccion: "ñan" },
        { palabraNativa: "carne", traduccion: "aycha" },
        { palabraNativa: "cabeza", traduccion: "uma" },
        { palabraNativa: "ojo", traduccion: "ñawi" },
        { palabraNativa: "boca", traduccion: "simi" },
        { palabraNativa: "mano", traduccion: "maki" },
        { palabraNativa: "pie", traduccion: "chaqui" },
        { palabraNativa: "nariz", traduccion: "sinqa" },
        { palabraNativa: "oreja", traduccion: "rinri" },
        { palabraNativa: "pájaro", traduccion: "p'unchay" },
        { palabraNativa: "árbol", traduccion: "mallki" },
        { palabraNativa: "amigo", traduccion: "masi" },
        { palabraNativa: "enemigo", traduccion: "qatiy" },
        { palabraNativa: "agua de río", traduccion: "mayu" },
        { palabraNativa: "agua de lago", traduccion: "qucha" },
        { palabraNativa: "campo", traduccion: "chakra" },
        { palabraNativa: "bosque", traduccion: "sach'a" },
        { palabraNativa: "maíz", traduccion: "sara" },
        { palabraNativa: "papa", traduccion: "papa" },
        { palabraNativa: "llama", traduccion: "lama" },
        { palabraNativa: "vicuña", traduccion: "wik'uña" },
        { palabraNativa: "alpaca", traduccion: "allpaqa" },
        { palabraNativa: "mono", traduccion: "k'usillu" },
        { palabraNativa: "serpiente", traduccion: "amaru" },
        { palabraNativa: "venado", traduccion: "taruka" },
        { palabraNativa: "zorro", traduccion: "atoq" },
        { palabraNativa: "perro", traduccion: "allqu" },
        { palabraNativa: "gato", traduccion: "misi" },
        { palabraNativa: "vaca", traduccion: "waka" },
        { palabraNativa: "caballo", traduccion: "wallpa" },
        { palabraNativa: "carne", traduccion: "aycha" },
        { palabraNativa: "pan", traduccion: "tanta" },
        { palabraNativa: "trigo", traduccion: "trigo" },
        { palabraNativa: "tortilla", traduccion: "t'anta" },
        { palabraNativa: "sal", traduccion: "kachi" },
        { palabraNativa: "miel", traduccion: "misk'i" },
        { palabraNativa: "leche", traduccion: "ñawi" },
        { palabraNativa: "queso", traduccion: "kasi" },
        { palabraNativa: "huevo", traduccion: "runtu" },
        { palabraNativa: "arroz", traduccion: "arroz" },
        { palabraNativa: "frijol", traduccion: "pallay" },
        { palabraNativa: "lenteja", traduccion: "lenteja" },
        { palabraNativa: "plátano", traduccion: "palta" },
        { palabraNativa: "manzana", traduccion: "manzana" },
        { palabraNativa: "naranja", traduccion: "naranja" },
        { palabraNativa: "limón", traduccion: "limu" },
        { palabraNativa: "uvas", traduccion: "wayra" },
        { palabraNativa: "durazno", traduccion: "durazno" },
        { palabraNativa: "ciruela", traduccion: "ciruela" },
        { palabraNativa: "sandía", traduccion: "sandía" },
        { palabraNativa: "melón", traduccion: "melón" },
        { palabraNativa: "piña", traduccion: "piña" },
        { palabraNativa: "mango", traduccion: "mango" },
        { palabraNativa: "pera", traduccion: "pera" },
        { palabraNativa: "zapato", traduccion: "sunku" },
        { palabraNativa: "sombrero", traduccion: "chuqu" },
        { palabraNativa: "camisa", traduccion: "sipaku" },
        { palabraNativa: "pantalón", traduccion: "wallqi" },
        { palabraNativa: "falda", traduccion: "pollera" },
        { palabraNativa: "abrigo", traduccion: "phullu" },
        { palabraNativa: "chaleco", traduccion: "q'ata" },
        { palabraNativa: "cinturón", traduccion: "siku" },
        { palabraNativa: "bufanda", traduccion: "wasqha" },
        { palabraNativa: "guante", traduccion: "makillina" },
        { palabraNativa: "gafas", traduccion: "ñawikuna" },
        { palabraNativa: "cartera", traduccion: "kipa" },
        { palabraNativa: "mochila", traduccion: "wayru" },
        { palabraNativa: "reloj", traduccion: "p'unchay wachiy" },
        { palabraNativa: "medicina", traduccion: "ampuy" },
        { palabraNativa: "enfermedad", traduccion: "onqoy" },
        { palabraNativa: "fuerza", traduccion: "kunan" },
        // Añade más palabras aquí
       
    
    ];

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        resultadosUl.innerHTML = '';

        if (query.trim() === '') {
            return;
        }

        const resultados = diccionario.filter(item => 
            item.palabraNativa.includes(query) || item.traduccion.includes(query)
        );

        resultados.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.palabraNativa} - ${item.traduccion}`;
            resultadosUl.appendChild(li);
        });
    });
});
