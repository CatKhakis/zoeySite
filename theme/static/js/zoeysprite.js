class Zoey {

    x = 0;
    y = 0;

    scale = 3.5;

    lastFrameTimestamp;

    spriteSets = {
        pet: [[0, 1], [0, 2], [0, 3], 4],
        sleep: [[2, 0], [2, 1], 5],
        yawn: [[2, 2], 4],
        idle: [[2, 3], 4],
        lookDown: [[3, 0], 9],
        jumpDown: [[3, 1], 0],
        scratchS: [[3, 2], [3, 3],15],
        scratchSelf: [[4, 0], [4, 1], 4],
        alert: [[5, 0], 4],
        walkRight: [[1, 0], [1, 1], 4],
        walkLeft: [[1, 2], [1, 3], 4],
    };

    constructor () {

        this.setSprite('sleep');

        this.titleBar = document.getElementById("titlebar");
        this.home = document.getElementById("zoeyHome");
        // this.pageSections = document.getElementById("content").children;

        this.zoey = document.createElement("div");

        this.zoey.id = "zoey";
        this.zoey.ariaHidden = true;
        this.zoey.style.width = `${32 * this.scale}px`;
        this.zoey.style.height = `${32 * this.scale}px`;
        this.zoey.style.position = "fixed";
        // this.zoey.style.pointerEvents = "none";
        this.zoey.style.imageRendering = "pixelated";
        this.zoey.style.zIndex = 2147483647;

        let nekoFile = "../images/zoey/sprites/zoeysprite.gif"
        const curScript = document.currentScript

        if (curScript && curScript.dataset.cat) {
            nekoFile = curScript.dataset.cat
        }
        this.zoey.style.backgroundImage = `url(${nekoFile})`;
        this.zoey.style.backgroundSize = `${288 * this.scale}px ${128 * this.scale}px`;

        
        this.loopSprite = this.loopSprite.bind(this);
        window.requestAnimationFrame(this.loopSprite);

        document.body.appendChild(this.zoey);

        this.updateScroll = this.updateScroll.bind(this);
        //document.addEventListener("scroll", this.updateScroll);
        window.addEventListener("resize", this.updateScroll);


        zoey.addEventListener("mouseenter", (event) => {
            this.setSprite('pet');
            this.zoey.style.cursor = "none";
        });
        zoey.addEventListener("mouseleave", (event) => {
            this.setSprite('sleep');
            this.zoey.style.cursor = "auto";
        });

        this.updateMode = "home";
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

        if (this.updateMode === 'titlebar') {

            this.yAnchor = this.titleBar.getBoundingClientRect().top;
            this.xAnchor = this.titleBar.getBoundingClientRect().left;
            
            //this.x = this.titleBar.children.item(0).children[0].getBoundingClientRect().right - this.xAnchor;
            this.x = this.titleBar.children.item(1).getBoundingClientRect().left - this.xAnchor - (32 * this.scale);
            this.y = this.pageSections[0].children[0].getBoundingClientRect().top - this.yAnchor - ((32 - this.offset) * this.scale);
            
            //left bound
            //this.titleBar.children.item(0).children[0].getBoundingClientRect().right - this.xAnchor;
            //right bound
            // this.titleBar.children.item(1).getBoundingClientRect().left;

            
        } else if (this.updateMode === 'home') {

            const bounds = this.home.getBoundingClientRect();

            this.yAnchor = bounds.top;
            this.xAnchor = bounds.left;
            
            this.x = bounds.width/2 - (32 * this.scale / 2);
            this.y = - ((32 - this.offset) * this.scale);
        }

        this.zoey.style.top = `${this.yAnchor + this.y}px`;
        this.zoey.style.left = `${this.xAnchor + this.x}px`;
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