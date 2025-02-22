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
