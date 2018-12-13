import { capitalize } from 'lodash';
import * as Screens from './Screens';


export default function Content(state){
    return `
<div id="content">
 <div class="container">
 <p>I am learning code</p>
${Screens[capitalize(state.active)]()}
 </div>


</div>
`;
}