document.addEventListener('DOMContentLoaded', function() {
    const cabecalhoContainer = document.querySelector('header');
    fetch('../complementos/header.html')
      .then(response => response.text())
      .then(html => cabecalhoContainer.innerHTML = html);
  });