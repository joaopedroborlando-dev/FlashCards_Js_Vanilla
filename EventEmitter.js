export default class EventEmitter {
    constructor() {
        this.events = {};
    }

    addEventListener(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, ...args) {
        console.log('Evento chamado: ', eventName)
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName].forEach(callback => {
            callback(...args);
        });
    }
}