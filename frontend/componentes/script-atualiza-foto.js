// Função para atualizar a pré-visualização da imagem
function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview-img');

    // Verifica se algum arquivo foi selecionado
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      // Quando a leitura do arquivo é concluída, atualiza a pré-visualização
      reader.onload = function(e) {
        preview.src = e.target.result;
      };
<<<<<<< HEAD

<<<<<<< HEAD
    

        // Lê o arquivo como uma URL de dados
        reader.readAsDataURL(input.files[0]);
      } else {
        // Se nenhum arquivo for selecionado, mantém a imagem pré-definida
        preview.src = "../imagens/perfis/foto.png";
      }
=======
=======

>>>>>>> 98cec1c38eafaae5bb5f3608636ca635bbfc0481
      // Lê o arquivo como uma URL de dados
      reader.readAsDataURL(input.files[0]);
    } else {
      // Se nenhum arquivo for selecionado, mantém a imagem pré-definida
      preview.src = "../imagens/perfis/foto.png";
<<<<<<< HEAD
>>>>>>> 98cec1c38eafaae5bb5f3608636ca635bbfc0481
=======
>>>>>>> 98cec1c38eafaae5bb5f3608636ca635bbfc0481
    }
  }

  // Adiciona um ouvinte de eventos ao campo de upload de imagem
  document.getElementById('upload').addEventListener('change', previewImage);

  // Função para salvar a imagem
  document.getElementById('btn-salvar-img').addEventListener('click', function() {
    // Aqui você pode adicionar o código para enviar a imagem para o servidor ou realizar outra ação necessária
    alert('Imagem salva com sucesso!');
  });