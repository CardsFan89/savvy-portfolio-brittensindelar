import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import greet from './src/greeting';

var state = {
    'title': 'Welcome to my Savvy Coders Portfolio Project'
};

document.querySelector('#root').innerHTML = ` 
${Navigation(state)}
${Header(state)}
${Content(state)}
${Footer(state)}
`;

greet();