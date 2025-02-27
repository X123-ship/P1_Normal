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
        { palabraNativa: "commo estas", traduccion: "imaynalla" },
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
        // Añade más palabras aquí
       ,
    
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
