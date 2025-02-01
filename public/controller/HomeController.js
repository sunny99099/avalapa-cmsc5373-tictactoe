import {HomeModel} from '../model/HomeModel.js';

export const glHomeModel = new HomeModel();

export class HomeController {
    model = null;
    view = null;
    constructor(){
        this.model =glHomeModel;
        this.onclickGenerateData = this.onclickGenerateData.bind(this);
    }
    setView(view){
        this.view = view;
    }
    onclickGenerateData(){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        this.model.addNumber(randomNumber);
        this.view.render();
    }
}