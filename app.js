"use strict";
class Tarefa {
    titulo;
    descricao;
    dataCriacao;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
    }
    renderizar() {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${this.titulo}</strong>
                <p>${this.descricao}</p>
                <small>Criado em: ${this.dataCriacao.toLocaleString()}</small>
            </div>
            <input type="checkbox" class="status-check">
        `;
        const checkbox = li.querySelector('.status-check');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.6';
            }
            else {
                li.style.textDecoration = 'none';
                li.style.opacity = '1';
            }
        });
        return li;
    }
}
const btn = document.getElementById('addBtn');
const lista = document.getElementById('lista');
btn.addEventListener('click', () => {
    const tituloInput = document.getElementById('tituloInput');
    const descInput = document.getElementById('descInput');
    if (tituloInput.value) {
        const novaTarefa = new Tarefa(tituloInput.value, descInput.value);
        lista.appendChild(novaTarefa.renderizar());
        tituloInput.value = '';
        descInput.value = '';
    }
    else {
        alert("Por favor, preencha o título!");
    }
});
