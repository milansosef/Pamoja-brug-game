class Plank {
    constructor(b) {
        this.bridge = b;
        console.log("Plank created");
        this.init();
    }
    init() {
        let imageURLs = ["Broken_Left.png", "Broken_middle.png", "Broken_Right.png", "Stairs_1.png", "Stairs_2.png", "Stairs_3.png"];
        let randomizer = Math.floor(Math.random() * 6);
        this.image = imageURLs[randomizer];
        switch (randomizer) {
            case 0:
                this.hole = 'left';
                break;
            case 1:
                this.hole = 'middle';
                break;
            case 2:
                this.hole = 'right';
                break;
        }
        this.createDiv();
    }
    createDiv() {
        this.div = document.createElement("plank");
        this.bridge.div.appendChild(this.div);
        this.div.style.backgroundImage = "url(images/" + this.image + ")";
    }
}
class Bridge {
    constructor() {
        this.createDiv();
        this.rect = this.div.getBoundingClientRect();
        this.setPosition();
        this.addPlanks();
        this.div.addEventListener('click', (event) => this.throwRock(event));
    }
    createDiv() {
        this.div = document.createElement("bridge");
        document.body.appendChild(this.div);
    }
    setPosition() {
        this.posX = window.innerWidth / 2 - this.rect.width / 2;
        this.div.style.left = this.posX + "px";
        this.div.style.top = this.posY + "px";
    }
    addPlanks() {
        this.planks = new Array();
        this.planks.push(new Plank(this));
    }
    throwRock(e) {
        this.rock = new Rock();
    }
}
class Game {
    constructor() {
        console.log('test');
        this.bridge = new Bridge();
    }
}
window.addEventListener("load", function () {
    new Game();
});
class Rock {
    constructor() {
        console.log("Rock thrown!");
        this.createDiv();
    }
    createDiv() {
        this.div = document.createElement("rock");
        document.body.appendChild(this.div);
    }
}
//# sourceMappingURL=main.js.map