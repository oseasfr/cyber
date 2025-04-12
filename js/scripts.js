document.addEventListener("DOMContentLoaded", function() {
  // Primeiro, busca o conteúdo Markdown do seu README.md no GitHub
  fetch('https://raw.githubusercontent.com/oseasfr/cyber/Principal/README.md')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar o arquivo: ' + response.status);
      }
      return response.text();
    })
    .then(markdown => {
      // Em seguida, envia o Markdown para a API do GitHub para renderizá-lo em HTML
      return fetch('https://api.github.com/markdown', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: markdown,
          mode: 'gfm',
          context: 'oseasfr/cyber'
        })
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na API do GitHub: ' + response.status);
      }
      return response.text();
    })
    .then(html => {
      // Exibe o HTML convertido na página
      document.getElementById('conteudo').innerHTML = html;
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('conteudo').innerHTML = "Erro ao carregar o conteúdo.";
    });
});
