import * as Screens from './Screens';

var Screens = {
    'home': Home,
    'blog': Blog,
};

export default function Content(state){
export default function Content(){
    return `
<div id="content">
 <div class="container">
${Home()}
 </div>


</div>
`;
}

