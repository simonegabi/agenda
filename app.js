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
