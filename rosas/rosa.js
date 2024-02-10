const siButton = document.querySelector('.si');
const noButton = document.querySelector('.no');
const mensajeElement = document.getElementById('mensaje');

const mensajesNo = [
    'Creo que se perdió un botón, búscalo y cuando este mensaje cambie sabremos cuál es la respuesta. Cada vez que lo quieras apretar saldrá algo nuevo aquí para saber si estás segura de lo que quieres.',
    'Busca bien el botón. Cada acción tiene una reacción.',
    'No hagas eso. Piensa en lo que estás a punto de hacer.',
    '¡Cuidado! No puedes presionar este botón. ¿Estás preparado para lo que pueda venir después?',
    '¿Estás seguro de querer presionar este botón? La elección es tuya, pero el resultado podría no serlo.',    'Busca bien el botón.',
    'No hagas eso.',
    '¡Cuidado! No puedes presionar este botón.',
    '¿Estás seguro de querer presionar este botón?',
    'No lo hagas, por favor.',
    '¿Realmente necesitas presionar este botón?',
    'Quizás deberías reconsiderar tu decisión.',
    'Parece que este botón no está funcionando correctamente.',
    '¿Qué te hace pensar que este botón es seguro?',
    'Podría haber consecuencias inesperadas.',
    'No puedo permitirte que presiones este botón.',
    '¿Estás preparado para lo que pueda pasar?',
    '¿Qué te lleva a querer presionar este botón?',
    'Ten cuidado con lo que deseas, podría hacerse realidad.',
    '¿Estás dispuesto a asumir la responsabilidad?',
    '¿Qué pasaría si este botón desencadena algo peligroso?',
    'Es mejor dejar este botón en paz.',
    'Puede que este botón te lleve a un lugar del que no puedas volver.',
    '¿Has considerado todas las posibles consecuencias?',
    'Piensa en lo que estás a punto de hacer.',
    'No subestimes el poder de este botón.',
    'Tal vez deberías buscar otra opción.',
    '¿Estás seguro de que quieres seguir adelante?',
    'El destino está en tus manos, elige sabiamente.',
    'No te precipites en tu decisión.',
    'No siempre es fácil distinguir entre lo correcto y lo incorrecto.',
    '¿Estás listo para enfrentar las repercusiones?',
    'La elección es tuya, pero el resultado podría no serlo.',
    '¿Has pensado en las posibles ramificaciones de tus acciones?',
    'El botón puede parecer inofensivo, pero las apariencias engañan.',
    'A veces, la mejor opción es no hacer nada en absoluto.',
    '¿Estás dispuesto a arriesgarlo todo?',
    'No todos los caminos conducen a donde queremos ir.',
    'Puede que este botón no sea lo que parece.',
    'La curiosidad mató al gato, ¿lo sabías?',
    'No te precipites en tomar una decisión.',
    '¿Estás preparado para lo desconocido?',
    'Las oportunidades pueden ser tentadoras, pero también pueden ser peligrosas.',
    'No siempre hay una respuesta clara.',
    'No te fíes de las apariencias.',
    'El botón puede parecer inocente, pero podría tener consecuencias inesperadas.',
    '¿Estás seguro de que quieres seguir adelante?',
    'A veces, lo mejor es dejar las cosas como están.',
    'Recuerda que cada acción tiene una reacción.',
    'Piensa en lo que estás a punto de hacer.',
    'No subestimes el poder del destino.',
    '¿Estás listo para lo que pueda venir después?',
    'La elección es tuya, pero el resultado podría no serlo.',
    '¿Estás preparado para enfrentar las consecuencias?'
];


let mensajeIndex = 0; // Inicializar el índice del mensaje

// Función para obtener un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Agregar event listener para el botón 'No'
noButton.addEventListener('click', () => {
    // Verificar si quedan más mensajes por mostrar
    if (mensajeIndex < mensajesNo.length) {
        // Actualizar contenido del elemento p con el mensaje actual
        mensajeElement.textContent = mensajesNo[mensajeIndex];
        mensajeIndex++; // Incrementar el índice para el próximo mensaje

        // Obtener dimensiones del contenedor padre del botón
        const containerWidth = noButton.parentElement.offsetWidth;
        const containerHeight = noButton.parentElement.offsetHeight;
        // Obtener dimensiones del botón
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        // Calcular nuevas coordenadas x e y dentro del contenedor
        const newX = getRandomNumber(0, containerWidth - buttonWidth);
        const newY = getRandomNumber(0, containerHeight - buttonHeight);
        // Establecer nuevas coordenadas de posición del botón
        noButton.style.position = 'absolute';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
    } else {
        // Si no quedan más mensajes, detener la acción
        alert('Ya no hay más mensajes para mostrar.');
    }
});

// Agregar event listener para el botón 'Sí'
siButton.addEventListener('click', () => {
    // Actualizar contenido del elemento p
    mensajeElement.innerHTML = 'Cuando quieras llámame y dímelo 😏 <br> jajaja.';
});
