# agenda
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Agenda</h1>
        <input type="text" id="nome" placeholder="Nome">
        <input type="date" id="data">
        <input type="time" id="hora">
        <button onclick="adicionarCompromisso()">Adicionar Compromisso</button>
        <ul id="lista-compromissos"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

input, button {
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style-type: none;
    padding: 0;
}
function adicionarCompromisso() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    
    if (nome && data && hora) {
        const listaCompromissos = document.getElementById('lista-compromissos');
        const novoCompromisso = document.createElement('li');
        novoCompromisso.textContent = `${nome} - ${data} - ${hora}`;
        listaCompromissos.appendChild(novoCompromisso);
        
        // Limpar os campos de entrada
        document.getElementById('nome').value = '';
        document.getElementById('data').value = '';
        document.getElementById('hora').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
