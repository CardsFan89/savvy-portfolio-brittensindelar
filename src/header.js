import { html } from 'lit-html';

export default function Header(state){
    return html`
         <div id="header">
            <div class="container">
                <h1>${state[state.active].title}</h1>
                <h2>My name is Britten Sindelar</h2>
            </div>
</div >

        `;
}

