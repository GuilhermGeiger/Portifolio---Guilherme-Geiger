const habilidades = document.querySelectorAll('.habilidade');

habilidades.forEach((habilidade) => {
    habilidade.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }

        removerSelecaoDaHabilidade();

        habilidade.classList.add('selecionada');

        alterarNomeHabilidade(habilidade);
        alterarDescricaoHabilidade(habilidade);
    });
});

function alterarDescricaoHabilidade(habilidade) {
    const descricaoHabilidade = document.getElementById('descricao-habilidade');
    descricaoHabilidade.innerText = habilidade.getAttribute('data-description');
}

function alterarNomeHabilidade(habilidade) {
    const nomeHabilidade = document.getElementById('nome-habilidade');
    nomeHabilidade.innerText = habilidade.getAttribute('data-name');
}

function removerSelecaoDaHabilidade() {
    const habilidadeSelecionada = document.querySelector('.selecionada');
    if (habilidadeSelecionada) {
        habilidadeSelecionada.classList.remove('selecionada');
    }
}



