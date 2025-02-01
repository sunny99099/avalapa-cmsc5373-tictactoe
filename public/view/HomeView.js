import { AbstractView } from "AbstractView.js";

export class HomeView extends AbstractView {
    controiller = null;
    constructor(controller) {
        super();
        this.controller = controller;
    }
    async onMount() {
        console.log('HomeView.onMount() is called');
    }
    async updateView() {
        console.log('HomeView.updateView() is called');
        const div = document.createElement('div');
        div.innerHTML = 'HomeView';
        return div;
    }
    attachEvents() {
        console.log('HomeView.attachEvents() is called');
    }
    async onLeave() {
        console.log('HomeView.onLeave() is called');
    }
}
