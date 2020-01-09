
import {declareChildApplication, start} from 'single-spa';
import 'babel-polyfill';

declareChildApplication('home', () => import('./Components/login-form.js'), () => location.pathname === "" || location.pathname === "/");


start();

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.indexOf(`${prefix}`) === 0;
    }
}

