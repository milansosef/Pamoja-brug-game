class Bridge {
    private div: HTMLElement;
    planks: Array<Plank>;
    private posX: number;
    private posY: number;
    private rect: ClientRect;

    constructor(){
        this.div = document.createElement("bridge");
        document.body.appendChild(this.div);

        this.rect = this.div.getBoundingClientRect();

        this.setPosition();

        this.planks = new Array<Plank>();
    }

    setPosition() {
        this.posX = window.innerWidth / 2 - this.rect.width / 2;
        //this.posY = window.innerHeight / 2 - this.rect.height / 2;

        this.div.style.left = this.posX + "px";
        this.div.style.top = this.posY + "px";
    }
}
