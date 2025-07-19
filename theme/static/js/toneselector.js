const root = document.querySelector(':root');
const shadeSelector = document.getElementById("shadeSelector");

//change for remembering last state
root.classList.add("frappe");

//hide other states when not hovered over

updateTone();

shadeSelector.addEventListener("click", (event) => { 

    if (!event.target.id) {
        clickedShade = event.target.classList[0];

        root.classList.remove(...root.classList);
        root.classList.add(clickedShade);

        updateTone();
    } else {
        console.log("click");
    }
});

shadeSelector.addEventListener("mouseenter", (event) => { 

    console.log("mouseenter");
});

shadeSelector.addEventListener("mouseleave", (event) => { 

    console.log("mouseleave");
});

function updateTone() {
    currentTone = root.classList[0];

    rootRules = getStylesheet("colors.css").cssRules[0].style;
    
    for (let i = 0; i < rootRules.length; i++) {

        propertyName = rootRules.item(i);
        rootRules.setProperty(propertyName, `var(--ctp-${currentTone}${propertyName.replace('--', '-')})`);
    }
}

function getStylesheet(href) {
    for (const element of document.styleSheets[0].cssRules) {
        if (href === element.href) {
            return element.styleSheet;
        }
    }
    return null;
}
