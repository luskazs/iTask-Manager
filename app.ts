class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
    }

    renderizar(): HTMLElement {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <div>
                <strong>${this.titulo}</strong>
                <p>${this.descricao}</p>
                <small>Criado em: ${this.dataCriacao.toLocaleString()}</small>
            </div>
            <input type="checkbox" class="status-check">
        `;

        const checkbox = li.querySelector('.status-check') as HTMLInputElement;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.6';
            } else {
                li.style.textDecoration = 'none';
                li.style.opacity = '1';
            }
        });

        return li;
    }
}

const btn = document.getElementById('addBtn') as HTMLButtonElement;
const lista = document.getElementById('lista') as HTMLUListElement;

btn.addEventListener('click', () => {
    const tituloInput = document.getElementById('tituloInput') as HTMLInputElement;
    const descInput = document.getElementById('descInput') as HTMLInputElement;

    if (tituloInput.value) {
        const novaTarefa = new Tarefa(tituloInput.value, descInput.value);
        lista.appendChild(novaTarefa.renderizar());
        
        tituloInput.value = '';
        descInput.value = '';
    } else {
        alert("Por favor, preencha o título!");
    }
});