class Zoey {

    x = 350;
    y = 400;

    scale = 4;

    lastFrameTimestamp;

    spriteSets = {
        pet: [[0, 1], [0, 2], [0, 3], 4],
        sleep: [[2, 0], [2, 1], 4],
        yawn: [[2, 2], 4],
        idle: [[2, 3], 4],
        lookDown: [[3, 0], 9],
        jumpDown: [[3, 1], 0],
        scratchS: [[3, 2], [3, 3],15],
        scratchSelf: [[4, 0], [4, 1], 4],
        alert: [[5, 0], 4],
    };

    constructor () {

        this.setSprite('idle');

        this.pageSections = document.getElementById("content").children;

        this.zoey = document.createElement("div");

        this.zoey.id = "zoey";
        this.zoey.ariaHidden = true;
        this.zoey.style.width = `${32 * this.scale}px`;
        this.zoey.style.height = `${32 * this.scale}px`;
        this.zoey.style.position = "fixed";
        this.zoey.style.pointerEvents = "none";
        this.zoey.style.imageRendering = "pixelated";
        this.zoey.style.left = `${this.x - 16}px`;
        this.zoey.style.top = `${this.y - 16}px`;
        this.zoey.style.zIndex = 2147483647;

        let nekoFile = "../images/zoey/sprites/zoeysprite.gif"
        const curScript = document.currentScript

        if (curScript && curScript.dataset.cat) {
            nekoFile = curScript.dataset.cat
        }
        this.zoey.style.backgroundImage = `url(${nekoFile})`;
        this.zoey.style.backgroundSize = `${288 * this.scale}px ${128 * this.scale}px`;

        document.body.appendChild(this.zoey);

        this.loopSprite = this.loopSprite.bind(this);
        window.requestAnimationFrame(this.loopSprite);

        this.updateScroll = this.updateScroll.bind(this);
        document.addEventListener("scroll", this.updateScroll);

        this.updateScroll();
    }

    drawSprite (name, frame) {
        const sprite = this.spriteSets[name][frame % this.spriteSets[name].length];
        this.zoey.style.backgroundPosition = `${-sprite[0] * 32 * this.scale}px ${-sprite[1] * 32 * this.scale}px`;
    }

    loopSprite (timestamp) {

        if (!this.lastFrameTimestamp) {

            this.lastFrameTimestamp = timestamp;
        }
        if (timestamp - this.lastFrameTimestamp > 400) {
            
            this.drawSprite(this.currentSprite, this.currentFrame);

            this.lastFrameTimestamp = timestamp;

            if (this.currentFrame < this.lastFrame) {
                this.currentFrame++;
            } else {
                this.currentFrame = 0;
            }
            
        }

        window.requestAnimationFrame(this.loopSprite);
    }

    setSprite(name) {
        this.currentSprite = name;
        this.currentFrame = 0;
        this.lastFrame = this.spriteSets[name].length - 2;
        this.offset = this.spriteSets[name][this.lastFrame + 1];
    }

    updateScroll() {

        for (const section of this.pageSections) {
            /*
        var rect = section.getBoundingClientRect();
            //console.log(rect.top, rect.right, rect.bottom, rect.left);
        }
            */

        //console.log("");

            this.y = this.pageSections[0].getBoundingClientRect().top;
            this.zoey.style.top = `${this.y - (32 - this.offset) * this.scale}px`;
        }
    }
}

const zoeyClass = new Zoey();


/*
    zoey.style.backgroundImage = `url(${nekoFile})`;

    document.body.appendChild(zoey);

    document.addEventListener("mousemove", function (event) {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    });

    document.addEventListener("scroll", function () {

        pageSections = document.getElementById("content").children;

        for (const section of pageSections) {

        var rect = section.getBoundingClientRect();
            //console.log(rect.top, rect.right, rect.bottom, rect.left);
        }

        //console.log("");

        nekoPosY = pageSections[0].getBoundingClientRect().bottom;
        zoey.style.top = `${nekoPosY - 16}px`;
    });
    setSprite("idle", 0);


    window.requestAnimationFrame(onAnimationFrame);
  }

  let lastFrameTimestamp;

  function onAnimationFrame(timestamp) {
    // Stops execution if the neko element is removed from DOM
    if (!zoey.isConnected) {
      return;

      */