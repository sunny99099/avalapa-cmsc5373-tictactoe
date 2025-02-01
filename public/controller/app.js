import {HomeView} from '../view/HomeView.js';
import {ProfileView} from '../view/ProfileView.js';
import {HomeController} from './HomeController.js';
import {ProfileController} from './ProfileController.js';
import {Router} from './Router.js';
import {loginFirebase,logoutFirebase} from './firebase_auth.js';


document.getElementById('appHeader').textContent="Cloud Web Templete";
document.title="App Templete";

const routes = [
    {path: '/', view: HomeView, controller: HomeController},
    {path: '/profile', view: ProfileView, controller: ProfileController}
];

export const router = new Router(routes);

router.navigate(window.location.pathname);

const menuItems = document.querySelectorAll('a[data-path]');
menuItems.forEach(item => {
    item.onclick = function(e){
        const path = item.getAttribute('data-path');
        router.navigate(path);
    }
});

document.forms.loginForm.onsubmit = async function(e){
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try{
        await loginFirebase(email, password);
        console.log('user logged in', email);
    } catch(e){
        console.error('Error logging in', e);
        const errorCode = e.code;
        const errorMessage = e.message;
        alert('Sign in failed:' + errorCode + ','+ errorMessage);
    }
    
}

document.getElementById('logoutButton').onclick = async function(e){
    try{
        await logoutFirebase();
        console.log('user logged out');
    } catch(e){
        console.error('Error logging out', e);
        const errorCode = e.code;
        const errorMessage = e.message;
        alert('Sign out failed:' + errorCode + ','+ errorMessage);
    }
}

document.getElementById('gotoCreateAccount').onclick = function(e){
    document.getElementById('loginDiv').classList.replace('d-block','d-none');
    document.getElementById('CreateAccountDiv').classList.replace('d-none','d-block');
    document.forms.createAccountForm.reset();
}

document.getElementById('gotoLogin').onclick = function(e){
    document.getElementById('CreateAccountDiv').classList.replace('d-block','d-none');
    document.getElementById('loginDiv').classList.replace('d-none','d-block');
}