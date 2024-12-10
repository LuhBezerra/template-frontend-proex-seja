## Passos para executar o projeto

1. **Clone o repositório do projeto:**
   ```sh
    git clone https://github.com/LuhBezerra/template-frontend-proex-seja.git
   ```
2. **Instale as dependências:**
    ```sh
    npm install
   ```
3. **Execute o servidor de desenvolvimento:**

    ```sh
    npm start
   ```

## 📂 Estrutura do projeto

A estrutura básica do projeto é organizada da seguinte forma:

- ```public/```: Contém os ativos públicos, como imagens e ícones.
- ```src/```: Contém os arquivos principais de código.
- ```src/store/```: O Redux e Axios já estão preconfigurados nessa pasta, com exemplos de configuração e gerenciamento de estados globais.
- ```src/store/../example-post/``` e ```src/pages/ExamplePosts```: Um código de exemplo para testar e compreender o funcionamento do template.  

### Observação: Configuração da URL da API

Por padrão, o projeto utiliza uma URL de uma API de teste. Para integrar com o backend que você está desenvolvendo, atualize o arquivo ```src/config/environment.js``` substituindo o valor de ```API_URL``` pela URL da sua API, Reinicie o servidor de desenvolvimento para que as alterações tenham efeito (pressione ```Ctrl + C``` no terminal) e execute o comando ```npm start``` novamente.