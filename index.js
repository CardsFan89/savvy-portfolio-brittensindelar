import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import greet from './src/greeting';

var links;
var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project'
    },
    'blog': {
        'title': 'Please read my blog'
    },

    'contact': {
        'title': 'Contact Me'
    },
    'projects': {
        'title': 'Look at my work'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();


    State.active = event.target.textContent;

    render(State); // enslit-disable-line
}
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;

    greet();

    links = document.querySelectorAll('#navigation a');


    links[0].addEventListener(
        'click',
        handleNavigation

    );

    links[1].addEventListener(
        'click',
        handleNavigation
    );
    links[2].addEventListener(
        'click',
        handleNavigation
    );
}
render(State);
