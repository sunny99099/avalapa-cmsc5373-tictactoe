// common super class

export class AbstractView{
    parentElement=document.getElementById("spaRoot");

    constructor(){
        if(new.target===AbstractView){
            throw new Error('Cannot instantiate AbstractView directly');
        }
    }

    //call when the view is mounted to the DOM
    async onMount(){
        throw new Error('onMount method must be implemented');
    }

    async render(){
     this.parentElement.innerHTML='';
     const elements =await this.updateView();
     this.parentElement.append(elements);
     this.attachEvents();
    }
    
    async updateView(){
        throw new Error('updateView method must be implemented');
    }

    attachEvents(){
        throw new Error('attachEvents method must be implemented');
    }  

    async onLeave(){
        throw new Error('onLeave method must be implemented');
    }
}