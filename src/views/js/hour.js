setInterval(() => {
    const horacerta = new Date().toLocaleTimeString();
    document.getElementById('hours').innerText = horacerta;
}, 1000);