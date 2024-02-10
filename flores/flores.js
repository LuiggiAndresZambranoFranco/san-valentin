
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };// Fecha de San Valentín (mes comienza desde 0, por lo que 1 representa febrero)
const valentinesDay = new Date(new Date().getFullYear(), 1, 9);

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
  
//   // Evento de carga para iniciar la cuenta regresiva
//   window.onload = function() {
//     updateCountdown();
//     setInterval(updateCountdown, 1000);
//   };

  
  // Función para mostrar el mensaje de amor al hacer clic
document.getElementById('loveMessage').onclick = function() {
    document.querySelector('.love-message-content').classList.remove('hidden');
  };
  
// Lista de poemas de amistad predefinidos
const friendshipPoems = [
    "La verdadera amistad es como la luz del sol en la tormenta, la guía en la oscuridad y la esperanza en la desesperación.",
    "La amistad es como una flor que debe ser regada regularmente para mantenerla viva y floreciente.",
    "Un amigo es alguien que te conoce tal como eres, entiende dónde has estado, te acompaña en tus alegrías y tus tristezas, celebra tus logros y te apoya en tus fracasos.",
    "La amistad es un tesoro invaluable que no se puede comprar ni vender, solo se puede cultivar y apreciar.",
    "Los amigos son como las estrellas en el cielo nocturno, siempre están ahí incluso cuando no los ves."
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
    generateFriendshipPoem();
  };
