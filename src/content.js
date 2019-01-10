import * as Screens from './Screens';
import { capitalize } from 'lodash';
import { html } from 'lit-html';

export default function Content(state){
    return html`
    <div id="content">
        <div class="container">
            <p>I am learning code</p>
            ${Screens[capitalize(state.active)](state)}
        </div>
    </div>
    `;
}