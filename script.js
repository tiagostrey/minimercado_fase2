/*
  Arquivo de scripts para o projeto Minimercado.
  Versão Final - Modelo Híbrido
*/
function atualizarRelogio() {
    const elementoRelogio = document.getElementById('relogio-dinamico');
    if (elementoRelogio) {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');
        elementoRelogio.textContent = `${horas}:${minutos}:${segundos}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();
});
