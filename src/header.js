export default function Header(state){
    console.log(state);
    console.log(state[state.active]);
    
return `
<div id="header">
<div class="container">
    <h1>${state[state.active].title}</h1>
    <h2>My name is Britten Sindelar</h2>
    </div>
</div>

`;
}

