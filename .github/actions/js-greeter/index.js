// .github/actions/js-greeter/index.js
const core = require('@actions/core');

try {
  // 1. Leer input
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`¡Hola ${nameToGreet}!`);
  
  // 2. Hacer lógica compleja
  const timeOfGreeting = new Date().toTimeString();
  
  // 3. Setear output
  core.setOutput('time', timeOfGreeting);
  
  // 4. Escribir en el GitHub Summary (¡Función genial!)
  core.summary.addHeading('Resumen del Saludo').addRaw(`Se saludó a ${nameToGreet} a las ${timeOfGreeting}`).write();

  // 5. Simular un error condicional
  if (nameToGreet.toLowerCase() === 'villano') {
    core.setFailed('¡No saludamos a los villanos!');
  }
} catch (error) {
  // Manejo de errores nativo del toolkit
  core.setFailed(error.message);
}