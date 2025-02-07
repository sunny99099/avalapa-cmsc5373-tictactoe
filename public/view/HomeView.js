import { AbstractView } from "./AbstractView.js";
import { currentUser } from "../controller/firebase_auth.js";

export class HomeView extends AbstractView {
    controiller = null;
    constructor(controller) {
        super();
        this.controller = controller;
    }
    async onMount() {
        if (!currentUser) {
            this.parentElement.innerHTML = '<h1> Access Denied </h1>';
            return;
        }
        console.log('HomeView.onMount() is called');
    }
    async updateView() {
        console.log('HomeView.updateView() is called');
        const viewWrapper = document.createElement('div');
        const response = await fetch('/view/templates/home.html', { cache: 'no-store' });
        viewWrapper.innerHTML = await response.text();

        return viewWrapper;
    }
    attachEvents() {
    }
    async onLeave() {
        if (!currentUser) {
            this.parentElement.innerHTML = '<h1> Access Denied </h1>';
            return
        }

        console.log('HomeView.onLeave() is called');
    }
}
