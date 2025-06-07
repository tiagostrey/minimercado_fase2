/*
  Arquivo de scripts para o projeto Minimercado.
  Fase 2 - Fundamentos de Sistemas Web
  Autor: Tiago Francisco Strey
*/

/**
 * Função para atualizar um relógio digital em tempo real.
 * Este é o requisito de "função temporal" da Fase 2.
 */
function atualizarRelogio() {
    const elementoRelogio = document.getElementById('relogio-dinamico');
    
    // Verifica se o elemento existe na página para evitar erros
    if (elementoRelogio) {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        
        // Formata a hora para exibição
        elementoRelogio.textContent = `${horas}:${minutos}:${segundos}`;
    }
}

// Ouve o evento de carregamento do DOM para iniciar o relógio
document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o relógio a cada segundo (1000 milissegundos)
    setInterval(atualizarRelogio, 1000);
    
    // Chama a função uma vez no início para não esperar 1 segundo para mostrar a hora
    atualizarRelogio();
});

// Outras funções JavaScript, como validações de formulário, poderiam ser adicionadas aqui.
