const quotes = [
  "El único delito, lo único ilegal, que está comprobado hasta ahora, es la grabación clandestina",
  "Todavía hay políticos que tratan de imitar a Goebbels. Miente, miente, que algo queda",
  "¡Aquí estoy, no me corro!",
  "Hoy puedo decir con la mayor certeza y convicción: la cuarentena permitió salvar muchas vidas en el Perú. Si no hubiéramos aprobado oportunamente esta medida, créanme, la cifra de fallecidos sería contada hoy por centenas de miles",
  "La lucha frontal contra la corrupción y la impunidad no es una lucha solo de este ciudadano, ni de este gobierno, es una lucha de todos los peruanos",
];

/**
 * Gets a random Vizcarra Quote
 * @return string}
 */
function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = {
  randomQuote
};
