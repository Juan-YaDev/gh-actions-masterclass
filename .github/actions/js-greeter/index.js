// .github/actions/js-greeter/index.js
const core = require('@actions/core');

try {
  // Leer input
  const nameToGreet = core.getInput('who-to-greet', { required: true });

  console.log(`¡Hola ${nameToGreet}! 👋`);

  // Generar hora
  const timeOfGreeting = new Date().toLocaleTimeString('es-ES');

  // Setear output
  core.setOutput('time', timeOfGreeting);

  // GitHub Summary (bonito)
  core.summary
    .addHeading(`Saludo a ${nameToGreet}`)
    .addRaw(`<p>Se realizó el saludo a las <strong>${timeOfGreeting}</strong></p>`)
    .write();

  // Simular error condicional
  if (nameToGreet.toLowerCase() === 'villano') {
    core.setFailed('¡No saludamos a los villanos!');
  }

} catch (error) {
  core.setFailed(`Error: ${error.message}`);
}