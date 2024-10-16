const s1 = document.getElementById('s1');
const jjk0 = document.getElementById('jjk0');
const s2 = document.getElementById('s2');

const titulo = document.getElementById('nompa');
const info = document.getElementById('infpa');
const info2 = document.getElementById('segundoP');

const arreglo = document.querySelectorAll('li');
const img = document.getElementById('imagen');

const historia = document.getElementsByClassName('historia');
const zonaResultados = document.getElementsByClassName('zonaResultados');
const foot = document.getElementsByClassName('foot');
const head = document.getElementsByClassName('head');
const header = document.getElementsByClassName('header');

function activo() {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i].onclick = function () {
            arreglo[i].classList.add('activo')
            titulo.textContent = arreglo[i].textContent;
            quitarColor();
        }
    }
}

function quitarColor() {
    if (titulo.textContent === 'Temporada 1') {
        s2.classList.remove('activo');
        jjk0.classList.remove('activo');
        img.setAttribute('src', '../img/temporada1.webp');
        info.textContent = 'La primera temporada de Jujutsu Kaisen fue un éxito rotundo, adaptando los primeros 63 capítulos del manga original de Gege Akutami. La serie se estrenó en octubre de 2020 y concluyó en diciembre del mismo año, con un total de 24 episodios.';
        info2.textContent = 'La temporada introdujo a los espectadores al mundo de los hechiceros, las maldiciones y la Escuela de Hechicería Técnica de Tokio. El protagonista, Yuji Itadori, un estudiante de secundaria con una fuerza sobrehumana, se ve envuelto en el mundo de la brujería después de tragar el dedo de Sukuna, el rey de las maldiciones. Si eres fan del anime y disfrutas de historias de acción, suspenso y sobrenatural, la primera temporada de Jujutsu Kaisen es una opción imprescindible.';
    } else if (titulo.textContent === 'Jujutsu Kaisen 0') {
        s1.classList.remove('activo');
        s2.classList.remove('activo');
        img.setAttribute('src', '../img/jjk0.webp');
        info.textContent = 'Es una película de anime precuela de la popular serie de televisión Jujutsu Kaisen. Se centra en la historia de Yuta Okkotsu, un estudiante de secundaria que está siendo perseguido por una maldición que se manifiesta como su amiga de la infancia, Rika.';
        info2.textContent = 'Jujutsu Kaisen 0 fue muy bien recibida por la crítica y los fans, destacando su animación, su emocionante trama y el desarrollo de los personajes. La película fue un éxito comercial, recaudando más de 100 millones de dólares en taquilla.';
        /*historia[0].classList.add('jjk0fondo');
        zonaResultados[0].classList.add('jjk0fondo');
        foot[0].classList.add('jjk0fondo');
        head[0].classList.add('jjk0fondo');
        header[0].classList.add('jjk0fondoImg');*/
    } else if (titulo.textContent === 'Temporada 2') {
        s1.classList.remove('activo');
        jjk0.classList.remove('activo');
        img.setAttribute('src', '../img/s2.webp');
        info.textContent = 'La segunda temporada de Jujutsu Kaisen se estrenó el 6 de julio de 2023 y concluyó el 31 de diciembre del mismo año. La temporada adaptó los capítulos del manga original de Gege Akutami desde el 64 hasta el 117.';
        info2.textContent = 'La popularidad de la segunda temporada ha llevado a la confirmación de una tercera temporada, que se espera que se estrene en 2024. La franquicia de Jujutsu Kaisen sigue siendo uno de los animes más populares y exitosos de la actualidad.';
    }
}
activo();