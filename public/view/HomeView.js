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

        const tbody = viewWrapper.querySelector('tbody');
        const numberList = this.controller.model.getNumberList();
        for (const number of numberList) {
            const tr = document.createElement('tr');
            tbody.appendChild(tr);

            const td1 = document.createElement('td');
            td1.textContent = number;
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            td2.innerHTML = `${number} <sup>2</sup> = ${number * number}`;
            tr.appendChild(td2);

            const td3 = document.createElement('td');
            td3.innerHTML = `${number} <sup>3</sup> = ${number * number * number}`;
            tr.appendChild(td3);
        }

        return viewWrapper;
    }
    attachEvents() {
        // console.log('HomeView.attachEvents() is called');
        const generateButton = document.getElementById('generateDataButton');
        generateButton.onclick = this.controller.onclickGenerateData;
    }
    async onLeave() {
        if (!currentUser) {
            this.parentElement.innerHTML = '<h1> Access Denied </h1>';
            return
        }

        console.log('HomeView.onLeave() is called');
    }
}
