const cardHolder = document.getElementById("cardHolder")

const card = document.getElementById("businessCard")


cardHolder.addEventListener("mousemove", (event) => { 

    card.classList.remove('classname');

    const bounds = cardHolder.getBoundingClientRect();

    centerX = bounds.left + (bounds.width / 2);
    centerY = bounds.top + (bounds.height / 2);

    mouseX = event.x;
    mouseY = event.y;

    //yFactor = mouseY - centerY;
    //xFactor = mouseX - centerX;

    yFactor = mouseY - centerY;
    xFactor = centerX - mouseX;

    xRotation = 10;
    yRotation = 5;

    card.style.transform = `
    perspective(1200px)
    rotateY(${map_range(xFactor, -(bounds.width / 2), (bounds.width / 2), -xRotation, xRotation)}deg) 
    rotateX(${map_range(yFactor, -(bounds.height / 2), (bounds.height / 2), -yRotation, yRotation)}deg)
    `;
});

cardHolder.addEventListener("mouseout", (event) => { 

    //void card.offsetWidth; // trigger reflow
    card.classList.add('classname'); // start animation
});

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}