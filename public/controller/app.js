document.getElementById('appHeader').textContent="Cloud Web Templete";
document.title="App Templete";

const routes = [
    {path: '/', view: HomeView, controller: HomeController},
    {path: '/profile', view: ProfileView, controller: ProfileController}
]