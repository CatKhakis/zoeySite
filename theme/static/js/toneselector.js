const root = document.querySelector(':root');
const shadeSelector = document.getElementById("shadeSelector");


const cachedTone = localStorage.getItem("tone");

if (cachedTone) {
    root.classList.add(cachedTone);
} else {
    root.classList.add("macchiato");
}

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

// shadeSelector.addEventListener("mouseenter", (event) => { 

//     console.log("mouseenter");
// });

// shadeSelector.addEventListener("mouseleave", (event) => { 

//     console.log("mouseleave");
// });

function updateTone() {
    currentTone = root.classList[0];

    localStorage.setItem("tone", currentTone);

    // rootRules = getStylesheet("colors.css").cssRules[0].style;
    rootRules = getStylesheet().style;
    
    for (let i = 0; i < rootRules.length; i++) {

        propertyName = rootRules.item(i);
        rootRules.setProperty(propertyName, `var(--ctp-${currentTone}${propertyName.replace('--', '-')})`);
    }
}

function getStylesheet() {
    for (const sheet of document.styleSheets) {

        for (const element of sheet.cssRules) {
            
            if (element.selectorText === ":root") {

                if (element.style[0] === "--text") {
                    
                    return element;
                }
            }
        }
    }
    return null;
}