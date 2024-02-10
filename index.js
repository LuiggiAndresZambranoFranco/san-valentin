// Fecha de San Valentín (mes comienza desde 0, por lo que 1 representa febrero)
const valentinesDay = new Date(new Date().getFullYear(), 1, 14);

// Función para actualizar el contador de cuenta regresiva
function updateCountdown() {
    const now = new Date().getTime();
    const distance = valentinesDay - now;
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if (distance > 0) {
      // Si todavía no es San Valentín, actualiza el contador de cuenta regresiva
      document.getElementById('countdown').innerHTML = `
        <p>Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para San Valentín.</p>
      `;
    } else {
      // Si es San Valentín, oculta el contador y muestra la tarjeta de San Valentín
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('valentineCard').classList.remove('hidden');
      startHeartsAnimation();
    }
  }
  
  // Evento de carga para iniciar la cuenta regresiva
  window.onload = function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  };

  
  // Función para mostrar el mensaje de amor al hacer clic
document.getElementById('loveMessage').onclick = function() {
    document.querySelector('.love-message-content').classList.remove('hidden');
  };
  
// Lista de poemas de amistad predefinidos
const friendshipPoems = [
    "La verdadera amistad es como un tesoro enterrado en el corazón, siempre presente aunque no siempre visible.",
    "La amistad es un puente que conecta dos almas, una canción que alegra el corazón y un refugio en tiempos difíciles.",
    "Un amigo es como un libro abierto, lleno de historias compartidas, risas y secretos guardados.",
    "La amistad es como un jardín floreciente, que requiere cuidado y atención para crecer y prosperar.",
    "Los amigos son como las estrellas en el cielo, iluminando nuestro camino en la oscuridad y brillando con luz propia.",
    "La verdadera amistad es eterna, como el flujo constante de un río que nunca se seca.",
    "Un amigo es como un faro en la tormenta, guiándonos hacia la seguridad cuando nos sentimos perdidos.",
    "La amistad es un regalo precioso, que se valora más con el paso del tiempo y las experiencias compartidas.",
    "Los amigos son como ángeles que caminan entre nosotros, trayendo consuelo, alegría y esperanza.",
    "La amistad es como una melodía armoniosa, que resuena en nuestros corazones y nos llena de alegría.",
    "Un amigo es como un rayo de sol en un día nublado, iluminando nuestra vida con su presencia cálida y radiante.",
    "La verdadera amistad es incondicional, como el amor de una madre que nunca se desvanece.",
    "Los amigos son como pilares que sostienen nuestra vida, proporcionando apoyo y fortaleza en momentos de necesidad.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud.",
    "Un amigo es como un árbol frondoso, que nos cobija bajo su sombra y nos ofrece protección contra las tormentas de la vida.",
    "La verdadera amistad es un lazo indestructible, que une nuestros corazones incluso en la distancia.",
    "Los amigos son como un reflejo de nosotros mismos, compartiendo nuestras alegrías, tristezas y sueños más profundos.",
    "La amistad es como un viaje emocionante, lleno de aventuras, risas y recuerdos que perduran para siempre.",
    "Un amigo es como un tesoro oculto en el fondo del mar, que descubrimos poco a poco y valoramos más con el tiempo.",
    "La verdadera amistad es un regalo divino, que ilumina nuestras vidas con su amor incondicional y su apoyo constante.",
    "Los amigos son como un faro en la oscuridad, guiándonos hacia la seguridad cuando nos sentimos perdidos.",
    "La amistad es como un árbol fuerte y frondoso, que nos brinda sombra en los días calurosos y refugio en las tormentas.",
    "Un amigo es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de alegría y gratitud.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con un amor que nunca se desvanece ni se desgasta.",
    "Los amigos son como pilares que sostienen nuestra vida, proporcionando apoyo y fortaleza en los momentos de mayor necesidad.",
    "La amistad es como una planta que florece, que necesita cuidado, atención y tiempo para crecer y prosperar.",
    "Un amigo es como un libro abierto, lleno de páginas de recuerdos compartidos, risas compartidas y secretos compartidos.",
    "La verdadera amistad es un regalo precioso, que se valora más con el paso del tiempo y se atesora como un tesoro en el corazón.",
    "Los amigos son como estrellas brillantes en el cielo nocturno, que iluminan nuestra vida con su brillo y nos guían en la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de luz.",
    "Un amigo es como un faro en la tormenta, que nos guía con su luz cuando nos sentimos perdidos y nos ofrece refugio en tiempos difíciles.",
    "La verdadera amistad es un lazo indestructible, que une nuestros corazones con nudos que nunca se desatan y vínculos que nunca se rompen.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida.",
    "La amistad es como una flor que florece en el jardín de nuestras vidas, que necesita cuidado, amor y atención para crecer y prosperar.",
    "Un amigo es como un rayo de sol en un día lluvioso, que ilumina nuestro camino con su calidez y nos llena de alegría con su presencia.",
    "La verdadera amistad es un regalo divino, que llena nuestras vidas con amor, alegría y felicidad infinita.",
    "Los amigos son como piedras preciosas, que brillan con luz propia y nos acompañan en nuestros momentos más oscuros y difíciles.",
    "La amistad es como un tesoro escondido, que descubrimos en los momentos más inesperados y nos llena de gratitud y felicidad.",
    "Un amigo es como un árbol fuerte y frondoso, que nos ofrece sombra en los días calurosos y nos protege de las tormentas.",
    "La verdadera amistad es un lazo eterno, que une nuestros corazones con vínculos indestructibles y nos acompaña en nuestro viaje por la vida.",
    "Los amigos son como estrellas en el cielo, que iluminan nuestro camino con su brillo y nos guían a través de la oscuridad.",
    "La amistad es como una melodía armoniosa, que llena nuestros corazones de alegría y nuestros días de felicidad.",
    "Un amigo es como un faro en la oscuridad, que nos guía con su luz y nos ofrece consuelo en los momentos de mayor necesidad.",
    "La verdadera amistad es un regalo precioso, que se atesora como un tesoro y se valora más con el paso del tiempo.",
    "Los amigos son como ángeles en la Tierra, que nos cuidan, nos protegen y nos acompañan en nuestro viaje por la vida."
];


  
  // Función para generar un poema de amistad al azar
  function generateFriendshipPoem() {
    // Seleccionar un poema aleatorio de la lista
    const randomIndex = Math.floor(Math.random() * friendshipPoems.length);
    const randomPoem = friendshipPoems[randomIndex];
  
    // Mostrar el poema en la pantalla
    const poemContent = document.querySelector('.poem-content');
    poemContent.innerHTML = randomPoem;
    poemContent.classList.remove('hidden');
  }
  
  // Evento de clic para generar un poema de amistad al hacer clic en el elemento 'poem'
  document.getElementById('poem').onclick = function() {
    // Cambiar el texto del elemento poem
    document.getElementById('poem').innerHTML = "Puedes hacer clic nuevamente, puede aparecer algo nuevo son 100 mensajes que puedes encontrar.";
    // Llamar a la función para generar un poema de amistad
    generateFriendshipPoem();
};


document.getElementById('loveMessage').onclick = function() {
    // Ocultar el mensaje de amor
    document.getElementById('loveMessage').classList.add('hidden');
    // Mostrar el contenido del mensaje de amor
    document.querySelector('.love-message-content').classList.remove('hidden');
    document.querySelector('.love-message-content').innerHTML = "Jjejej el panda dice: ¡Te quiero con todo mi corazón!";
};





  const botonFlor = document.getElementById('florBtn');
      
  // Añadir evento de clic al botón
  botonFlor.addEventListener('click', function() {
    // Redirigir a la sección de la flor en el documento
    window.location.href = '/flores/flores.html';
  });