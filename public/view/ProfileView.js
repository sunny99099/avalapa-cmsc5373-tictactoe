import { AbstractView } from './AbstractView.js';

export class ProfileView extends AbstractView {
    controiller = null;
    constructor(controller) {
        super();
        this.controller = controller;
    }
    async onMount() {
        console.log('ProfileView.onMount() is called');
    }
    async updateView() {
        console.log('ProfileView.updateView() is called');
        const div = document.createElement('div');
        div.innerHTML = 'Profile View';
        return div;
    }
    attachEvents() {
        console.log('ProfileView.attachEvents() is called');
    }
    async onLeave() {
        console.log('ProfileView.onLeave() is called');
    }
}
