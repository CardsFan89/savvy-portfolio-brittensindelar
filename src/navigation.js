export default function navigation(state){
    var links = state[state.active].links;
    var list = '';
   

    for(let i = 0; i < links.length; i++){
        list += `
        <li>
        <a href='#'>${links[i]}</a>
        `
        }
        list += `
            <li>
                <a href="/${link}">${links[i]}</a>
            </li>
        `;
    }

    console.log(list);

    return `
        <div id="navigation">
            <ul class="container">
                ${list}
            </ul>
        </div >

            `;
}
