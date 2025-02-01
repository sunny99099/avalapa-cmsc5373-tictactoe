export class Router{
    routes = null;
    currentview = null;

    constructor(routes){
        this.routes = routes;
        const path = window.location.pathname;
    }

    async navigate(path){
        await this.#loadRoute(path);
    }

    async #loadRoute(path){
        let machingRoute = this.routes.find(route => route.path === path);
        if(!machingRoute){
            console.error('No matching route found for path:', path);
            matchingRoute = this.routes[0];
            window.location.pathname = matchingRoute.path;
        }

        const controller = new matchedRoute.controller();
        const view = new matchedRoute.view(controller);
        controller.setView(view);

        if(this.currentView){
            await this.currentView.onLeave();
            this.currentView = view;
            await view.onMount();
            await view.render();
            
        }
    }
}