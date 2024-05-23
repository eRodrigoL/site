document.addEventListener('DOMContentLoaded', function() {
    const cabecalhoContainer = document.querySelector('header');
    fetch('../complementos/header.html')
      .then(response => response.text())
      .then(
        html =>{ 
          cabecalhoContainer.innerHTML = html
          executeScripts(cabecalhoContainer);
          const isLogin = localStorage.getItem('login')
          if(isLogin){
            const identificacaoContainer = document.getElementById('identificacaoContainer');
            identificacaoContainer.innerHTML=''
            identificacaoContainer.innerHTML=`<p>Olá ${isLogin}</p> <button id="logout">Sair</button>`
            const logout = document.getElementById('logout');
            logout.addEventListener('click', ()=>{
              localStorage.removeItem('login')
              window.location.reload()
            })
          }else{
            const scriptLogin = document.createElement('script');
            scriptLogin.src = '../componentes/script-login.js';
            document.body.appendChild(scriptLogin);
          }

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