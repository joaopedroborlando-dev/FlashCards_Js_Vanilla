import FlashCardModel from "./FlashCardModel.js";
import FlashCardCrudView from "./FlashCardCrudView.js";

export default class FlashCardController {
    constructor() {
        this.model = new FlashCardModel();
        this.view = new FlashCardCrudView();

        this.registerEvent();
        this.bindHandler();
    }

    registerEvent() {
        this.model.addEventListener('card_list', (cards) => {
            this.view.renderList(cards);
        });
    }

    bindHandler() {
        this.view.bindAddCard((card) => {
            console.log(card);
            this.model.addCard(card);
        });
    }
}