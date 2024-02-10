function playAnimation() {
    document.body.classList.add('liked');
    setTimeout(function() {
      document.body.classList.remove('liked');
    }, 1000); // Ajusta este valor al tiempo de duración de tu animación en milisegundos
  }