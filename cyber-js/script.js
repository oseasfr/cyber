document.addEventListener("DOMContentLoaded", function() {
  fetch('https://raw.githubusercontent.com/oseasfr/cyber/Principal/README.md')
    .then(response => response.text())
    .then(text => {
      const html = marked(text);
      document.getElementById('conteudo').innerHTML = html;
    })
    .catch(error => {
      console.error('Erro ao carregar o README:', error);
    });
});