class Bridge {
    constructor() {
        this.div = document.createElement("bridge");
        document.body.appendChild(this.div);
        console.log('swag');
        this.rect = this.div.getBoundingClientRect();
        this.setPosition();
        this.div.addEventListener('click', (event) => this.throwRock(event));
    }
    setPosition() {
        this.posX = window.innerWidth / 2 - this.rect.width / 2;
        this.div.style.left = this.posX + "px";
        this.div.style.top = this.posY + "px";
    }
    throwRock(e) {
        this.rock = new Rock();
    }
}
class Rock {
    constructor() {
        console.log("Rock thrown!");
        this.div = document.createElement("rock");
        document.body.appendChild(this.div);
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
class Plank {
    constructor() {
        console.log("Plank created");
    }
}
//# sourceMappingURL=main.js.map