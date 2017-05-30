class Plank {
    constructor(b, x, y) {
        this.bridge = b;
        this.x = x;
        this.y = y;
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
        this.div.addEventListener('click', (event) => this.checkPlank(event));
    }
    createDiv() {
        this.div = document.createElement("plank" + this.randomInt(1, 5));
        this.bridge.div.appendChild(this.div);
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px";
    }
    randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    checkPlank(e) {
        let target = e.target;
        console.log(target);
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
        for (let i = 0; i < 9; i++) {
            this.planks.push(new Plank(this, 80, 23 + (104 * i)));
        }
    }
    throwRock(e) {
        this.rock = new Rock();
    }
}
class Game {
    constructor() {
        let bridge = new Bridge();
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
class Part {
    constructor() {
    }
    createDiv() {
        this.div = document.createElement("part");
        document.body.appendChild(this.div);
    }
}
class Broken extends Part {
    constructor() {
        super();
    }
    createDiv() {
        this.div = document.createElement("broken");
        document.body.appendChild(this.div);
    }
}
//# sourceMappingURL=main.js.map