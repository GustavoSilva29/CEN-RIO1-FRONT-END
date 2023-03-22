										//Codigo comentado para que todos da equipe possam entender!

// Solicitação da API JSONPlaceholder para obter a lista de posts

axios.get('https://jsonplaceholder.typicode.com/posts')	//O método axios.get é usado para enviar a solicitação HTTP GET.
.then(response => {  					// Quando a solicitação HTTP GET for bem-sucedida, execute a seguinte função
    const posts = response.data;  			// Extraia os dados da resposta da solicitação HTTP e armazene-os em uma variável chamada "posts"
    const postsList = document.querySelector('#posts-list');  // Selecione o elemento HTML com o id "posts-list" e armazene-o em uma variável chamada "postsList"
    posts.forEach(post => {  				// Para cada objeto "post" no array "posts", execute a seguinte função
      const li = document.createElement('li');  	// Crie um novo elemento HTML "li"
      li.textContent = post.title;  			// Defina o texto do elemento "li" como o título do objeto "post" atual
      postsList.appendChild(li); 			// Adicione o elemento "li" criado anteriormente ao final da lista "postsList"
    });
  })
  .catch(error => {  					// Se a solicitação HTTP GET falhar, execute a seguinte função com o erro como parâmetro
    console.log(error);  				// Exiba o erro no console do navegador
  });


// Solicitação da API JSONPlaceholder para obter a lista de comentários de um post

const btnComments = document.querySelector('#btn-comments'); 	 // Seleciona o botão com o ID 'btn-comments' e adiciona um evento de clique
btnComments.addEventListener('click', () => {                	 // Adiciona uma função ao ser clicado, que busca e exibe os comentários de um post selecionado
  const postId = document.querySelector('#post-id').value;   	 // Obtém o ID do post a partir do valor do input com o ID 'post-id'
  const commentsList = document.querySelector('#comments-list'); // Seleciona a lista de comentários com o ID 'comments-list' e limpa seu conteúdo anterior
  commentsList.innerHTML = '';
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`) // Faz uma requisição HTTP GET para obter os comentários do post selecionado
    .then(response => {							// Ao receber a resposta, cria um elemento de lista para cada comentário e adiciona na lista de comentários.
      const comments = response.data;
      comments.forEach(comment => {
        const li = document.createElement('li');
        li.textContent = comment.body;
        commentsList.appendChild(li);
      });
    })
    .catch(error => {				// Se a solicitação HTTP GET falhar, execute a seguinte função com o erro como parâmetro
      console.log(error);                           // Exiba o erro no console do navegador
    });
});

// Solicitação da API JSONPlaceholder para obter a lista de usuários
axios.get('https://jsonplaceholder.typicode.com/users') //O método axios.get é usado para enviar a solicitação HTTP GET.
  .then(response => {							// Quando a solicitação HTTP GET for bem-sucedida, execute a seguinte função
    const users = response.data;					// Extraia os dados da resposta da solicitação HTTP e armazene-os em uma variável chamada "posts"
    const usersList = document.querySelector('#users-list'); // seleciona o elemento HTML com o id "users-list" e armazena-o na variável usersList
    users.forEach(user => {					// itera sobre a lista de usuários e cria um elemento de lista para cada um
      const li = document.createElement('li');			// cria um novo elemento de lista HTML
      li.textContent = user.name;				// define o texto do elemento de lista como o nome do usuário atual
      usersList.appendChild(li);				// adiciona o elemento de lista criado como filho do elemento HTML com o id "users-list"
    });
  })
  .catch(error => {					// Se a solicitação HTTP GET falhar, execute a seguinte função com o erro como parâmetro
    console.log(error);					// Exiba o erro no console do navegador
  });

// Solicitação da API JSONPlaceholder para obter os detalhes de um usuário específico

const btnUserDetails = document.querySelector('#btn-user-details'); // adiciona um ouvinte de evento de clique no botão
btnUserDetails.addEventListener('click', () => { 		// obtém o valor do campo de entrada HTML com o id "user-id" e armazena-o na variável userId
const userId = document.querySelector('#user-id').value; 	// seleciona o elemento HTML com o id "user-details" e armazena-o na variável userDetails
  const userDetails = document.querySelector('#user-details');	// limpa qualquer conteúdo anterior do elemento HTML "userDetails"
  userDetails.innerHTML = '';
  
  // faz uma solicitação GET para a API do JSONPlaceholder para obter os detalhes do usuário correspondente ao ID inserido pelo usuário
  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {							 // armazena os dados do usuário na variável user
      const user = response.data;					// cria um novo elemento HTML do tipo parágrafo e define seu conteúdo como o nome e o e-mail do usuário
      const p = document.createElement('p');
      p.innerHTML = `Nome: ${user.name}<br>Email: ${user.email}`;	// adiciona o elemento de parágrafo criado como filho do elemento HTML com o id "user-details"
      userDetails.appendChild(p);
    })
    .catch(error => { 	// exibe qualquer erro que ocorra na solicitação na saída do console
      console.log(error);
    });
});

