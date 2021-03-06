"use strict";
document.getElementById('menu-placeholder').innerHTML = `
<div class="slide-menu-container">
<div id="main-menu-button" class="slide-button">
        <div class="slide-button-bar slide-button-top"></div>
        <div class="slide-button-bar slide-button-middle"></div>
        <div class="slide-button-bar slide-button-bottom"></div>
    </div>
    <div class="slide-menu" id="main-menu">
        <div class='slide-menu-content'>
            <ul class="menu" >
                <li><a href="/webprogbase-lab1/index.html">Home</a></li>
                <li><a href="/webprogbase-lab1/users.html">Users</a></li>
                <li><a href="/webprogbase-lab1/tasks.html">Tasks</a></li>
                <li><a href="/webprogbase-lab1/about.html">About</a></li>
            </ul>
        </div>
    </div>
</div>
`;
const mainMenu = document.getElementById('main-menu');
document.getElementById('main-menu-button').onclick = function () {
    this.classList.toggle('slide-button-open');
    mainMenu.classList.toggle('slide-menu-show');
};
