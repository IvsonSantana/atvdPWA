const API_URL = 'https://localhost:3000/api/eletrodomestico';

document.getElementById('eletrodomesticoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const  marca = document.getElementById('marca').value;
    const tipo = document.getElementById('tipo').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ marca, tipo })
    });

    const eletrodomestico = await response.json();
    appendEletrodomestico(eletrodomestico);

    document.getElementById('marca').value = '';
    document.getElementById('tipo').value = '';
});

async function loadEletrodomesticos() {
    const response = await fetch(API_URL);
    const eletrodomestico = await response.json();
    eletrodomestico.forEach(appendEletrodomesticos);
}

function appendEletrodomestico(eletrodomestico) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${eletrodomestico.marca}</strong>
        <p>${eletrodomestico.tipo}</p>
        <button onclick="deleteEletrodomestico('${eletrodomestico._id}')">Deletar</button>
    `;
    document.getElementById('eletrodomesticoList').appendChild(li);
}

async function deleteEletrodomestico(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}

loadEletrodomesticos();
