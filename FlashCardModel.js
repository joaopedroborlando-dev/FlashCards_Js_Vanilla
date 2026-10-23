import EventEmitter from "./EventEmitter.js";

export default class FlashCardModel extends EventEmitter {
    constructor() {
        super();
        this.cards = [];
    }

    addCard(card) {
        this.cards.push({ pergunta: card.pergunta, resposta: card.resposta, assunto: card.assunto });
        this.emit('card_list', this.cards);
    }

    removeCard(index) {
        if (index >= 0 && index < this.cards.length) {
            this.cards.splice(index, 1);
            this.emit('card_list', this.cards);
        } else {
            console.error('Índice de carta inválido:', index);
        }
    }
}