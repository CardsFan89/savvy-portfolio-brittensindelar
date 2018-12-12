export default function Blog(){
    return `
    <body>
   

    <div id="navigation"> 
        <ul>
            <li>home</li>
        
            <li>about</li>
            <li>
            <a href="./Projects">projects</a>
            <ul class= "dropdown">
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                    
            </ul>         
           </li>
            
            
        </ul>
    </div>
    <div id="header">
            <h1>Welcome to My Blog</h1>

            <img src="https://media.bizj.us/view/img/3377771/stlouiscardinals1998-presentlogo*750xx325-183-0-10.jpg" alt="Birds">

    </div>
    <div id="content">
        <p>
            How are you? I love to travel and I love to watch cardinal baseball.  
        </p>
    
    </div>
    <div id="footer">
        Follow the St. Louis Cardinals:<a href="https://www.instagram.com/cardinals/?hl=en">Instagram</a>
    </div>

</body>
</html>
    `;
}