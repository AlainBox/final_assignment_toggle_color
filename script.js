// Menu open on-click
let toggleNavStatus = false;

const toggleMenu = function(){
    let getNavSidebar = document.querySelector(".navigation-aside");
    let getNavSidebarUl = document.querySelector(".navigation-aside ul");
    let getNavSidebarLinks = document.querySelectorAll(".navigation-aside ul li");

    if (toggleNavStatus === false){
        getNavSidebar.style.width = "300px";
        getNavSidebarUl.style.display = "block";

        let arrayLength = getNavSidebarLinks.length;

        for (let i = 0; i < arrayLength; i++) {
            getNavSidebarLinks[0].style.background = "blue";
            getNavSidebarLinks[1].style.background = "purple";
            getNavSidebarLinks[2].style.background = "green";
            getNavSidebarLinks[3].style.background = "red";
            getNavSidebarLinks[4].style.background = "rgb(250, 250, 250)";
        }

        toggleNavStatus = true;

    } else if (toggleNavStatus === true){
        getNavSidebar.style.width = "60px";
        getNavSidebarUl.style.display = "none";

        toggleNavStatus = false;
            }
};

let hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", toggleMenu);

// Open menu on hover
hamburgerMenu.addEventListener("mouseover", toggleMenu);

// Close menu on hover (uncomment to check)
// const toggleMenu2 = function(){
//     let getNavSidebar = document.querySelector(".navigation-aside");
//     let getNavSidebarUl = document.querySelector(".navigation-aside ul");

//     if (toggleNavStatus === true){
//         getNavSidebar.style.width = "60px";
//         getNavSidebarUl.style.display = "none";
    
//         toggleNavStatus = false;
//         }
// };

// hamburgerMenu.addEventListener("mouseout", toggleMenu2);

// Change background color to blue + close menu when clicked
const changeBackgroundBlue = function(){
    let getNavSidebar = document.querySelector(".navigation-aside");
    let getNavSidebarUl = document.querySelector(".navigation-aside ul");

    document.body.style.background =  "blue";
    document.innerHTML = "blue";
    
    if (toggleNavStatus === true){
    getNavSidebar.style.width = "60px";
    getNavSidebarUl.style.display = "none";

    toggleNavStatus = false;
    }
};

let blueButton = document.getElementById("navigation-aside-link1")
blueButton.addEventListener("click", changeBackgroundBlue);

// Change background color to purple + close menu when clicked
const changeBackgroundPurple = function(){
    let getNavSidebar = document.querySelector(".navigation-aside");
    let getNavSidebarUl = document.querySelector(".navigation-aside ul");

    document.body.style.background =  "purple";

    if (toggleNavStatus === true){
        getNavSidebar.style.width = "60px";
        getNavSidebarUl.style.display = "none";
    
        toggleNavStatus = false;
    }
};

let purpleButton = document.getElementById("navigation-aside-link2")
purpleButton.addEventListener("click", changeBackgroundPurple);

// Change background color to green + close menu when clicked
const changeBackgroundGreen = function(){
    let getNavSidebar = document.querySelector(".navigation-aside");
    let getNavSidebarUl = document.querySelector(".navigation-aside ul");

    document.body.style.background =  "green";

    if (toggleNavStatus === true){
        getNavSidebar.style.width = "60px";
        getNavSidebarUl.style.display = "none";
    
        toggleNavStatus = false;
    }
};

let greenButton = document.getElementById("navigation-aside-link3")
greenButton.addEventListener("click", changeBackgroundGreen);

// Change background color to red + close menu when clicked
const changeBackgroundRed = function(){
    let getNavSidebar = document.querySelector(".navigation-aside");
    let getNavSidebarUl = document.querySelector(".navigation-aside ul");

    document.body.style.background =  "red";

    if (toggleNavStatus === true){
        getNavSidebar.style.width = "60px";
        getNavSidebarUl.style.display = "none";
    
        toggleNavStatus = false;
    }
};

let redButton = document.getElementById("navigation-aside-link4")
redButton.addEventListener("click", changeBackgroundRed);

// Reset background color + close menu when clicked
const resetBackground = function(){
    let getNavSidebar = document.querySelector(".navigation-aside");
    let getNavSidebarUl = document.querySelector(".navigation-aside ul");

    document.body.style.background =  "rgb(250, 250, 250)";

    if (toggleNavStatus === true){
        getNavSidebar.style.width = "60px";
        getNavSidebarUl.style.display = "none";
    
        toggleNavStatus = false;
    }
};

let resetBackgroundButton = document.getElementById("navigation-aside-link5")
resetBackgroundButton.addEventListener("click", resetBackground);

// Show color when selecting a color from the menu
const showText = function(color){
    document.getElementById("demo").innerHTML = color
};

// Navigation through keyboard numbers (1 to 5)
var colorMap = {
    '1' : 'blue',
    '2' : 'purple',
    '3' : 'green',
    '4' : 'red',
    '5' : 'rgb(250, 250, 250)'
};

function changeProperty (target, event, propertyName) {
    if (!target || !event || !propertyName) {
        return false;
    }
    else {
        target = target.nodeType && target.nodeType === 1 ? target : document.getElementById(target);
        
        var letter = String.fromCharCode(event.which).toLowerCase(),
            oldPropertyValue = window.getComputedStyle(target,null)[propertyName];
        target.style[propertyName] = colorMap[letter] || oldPropertyValue;
    }
}

document.body.addEventListener('keyup', function(e){
    changeProperty(document.getElementById('bodyID'), e, 'backgroundColor');
});
