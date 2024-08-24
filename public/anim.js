// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición y duración en segundos
var lyricsData = [
  { text: "Se llego el día 365 un año mas que Dios le ha sumado a tú vida", time: 8, duration: 7 },
  { text: "vámonos a celebrar, traigo el mariachi traigo el guaro te tenés", time: 13, duration: 7 },
  { text: "que levantar que desde ahora tu cumpleaños va empezar..", time: 20, duration: 5 },

  // Coro
  { text: "Feliz cumpleaños Dios te bendiga te de salud y te de larga vida..", time: 25, duration: 8 },
  { text: "Feliz cumpleaños Dios te bendiga por ti brindamos y vamos de amanecida..", time: 33, duration: 9 },
  { text: "Feliz Cumpleaños hoy te cantamos, con tu familia y", time: 42, duration: 5 },
  { text: "que lluevan los regalos..", time: 47, duration: 2.5 },
  { text: "Hoy festejamos con alegría, y que esta fiesta dure por hay tres días..", time: 50, duration: 9 },

  // Segunda parte
  { text: "Se llego el día 365 un año mas que Dios le ha sumado a tú vida", time: 67, duration: 6.5 },
  { text: "vámonos a celebrar, traigo el mariachi traigo el guaro te tenés que", time: 73, duration: 6.5 },
  { text: "levantar que desde ahora tu cumpleaños va empezar..", time: 78, duration: 5 },

  // Coro repetido
  { text: "Feliz cumpleaños Dios te bendiga te de salud y te de larga vida..", time: 83, duration: 7.5 },
  { text: "Feliz cumpleaños Dios te bendiga por ti brindamos y vamos de amanecida..", time: 92, duration: 8.5 },
  { text: "Feliz Cumpleaños hoy te cantamos, con tu familia y que lluevan los regalos..", time: 100, duration: 6 },
  { text: "Hoy festejamos con alegría, y que esta fiesta dure por hay tres días..", time: 109, duration: 8 },
];

// Animar las letras
function updateLyrics() {
  var currentTime = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time && currentTime < line.time + line.duration
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1; // Mostrar la letra
  } else {
    lyrics.style.opacity = 0; // Ocultar si no hay letra
  }
}

// Actualizar letras cada 500ms para mayor precisión
setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);