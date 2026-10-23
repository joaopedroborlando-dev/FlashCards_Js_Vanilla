export default class FlashCardCrudView {
    constructor() {
        this.render();
    }

    render() {
        this.form = document.createElement('form');
        this.form.innerHTML = `
            <input type="text" placeholder="Pergunta" id="pergunta">
            <input type="text" placeholder="Resposta" id="resposta">
            <input type="text" placeholder="Assunto" id="assunto">
            <button type="submit">Adicionar</button>
        `;

        this.list = document.createElement('ul');

        const root = document.getElementById('root');
        root.appendChild(this.form);
        root.appendChild(this.list);
    }

    bindAddCard(handler) {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const pergunta = document.getElementById('pergunta').value;
            const resposta = document.getElementById('resposta').value;
            const assunto = document.getElementById('assunto').value;

            handler({ pergunta, resposta, assunto });

            document.getElementById('pergunta').value = '';
            document.getElementById('resposta').value = '';
            document.getElementById('assunto').value = '';

            document.getElementById('pergunta').focus();
        });
    }

    renderList(cards) {
        this.list.innerHTML = "";
        for (const card of cards) {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="item-info">
                    <strong>${card.pergunta}</strong> 
                </div>
            `;
            this.list.append(li);
        }
    }
}