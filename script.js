// Relógio em Tempo Real
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
    
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    document.getElementById('date').innerText = now.toLocaleDateString('pt-BR', options);
}

setInterval(updateClock, 1000);
updateClock();

function toggleMenu() {
    alert("Gaveta de Apps do Symbian Belle (em desenvolvimento)");
}
