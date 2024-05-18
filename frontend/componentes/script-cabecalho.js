document.addEventListener('DOMContentLoaded', function() {
    const cabecalhoContainer = document.querySelector('header');
    fetch('../complementos/header.html')
      .then(response => response.text())
      .then(
        html =>{ 
          cabecalhoContainer.innerHTML = html
          executeScripts(cabecalhoContainer);

          const scriptLogin = document.createElement('script');
          scriptLogin.src = '../componentes/script-login.js';
          document.body.appendChild(scriptLogin);
        });
      function executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          newScript.textContent = script.textContent;
          document.body.appendChild(newScript);
        });
      }
  });