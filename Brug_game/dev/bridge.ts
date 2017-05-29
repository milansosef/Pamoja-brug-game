/// <reference path="plank.ts"/>

class Bridge {
    public div: HTMLElement;
    private posX: number;
    private posY: number;
    private rect: ClientRect;
    private planks: Array<Plank>;
    private rock: Rock;

    constructor(){
        this.createDiv();

        this.rect = this.div.getBoundingClientRect();

        this.setPosition();
        this.addPlanks();

        //Add rock when bridge is clicked
        this.div.addEventListener('click', (event: MouseEvent)=>this.throwRock(event));
    }

    createDiv(){
        this.div = document.createElement("bridge");
        document.body.appendChild(this.div);
    }

    setPosition() {
        this.posX = window.innerWidth / 2 - this.rect.width / 2;
        //this.posY = window.innerHeight / 2 - this.rect.height / 2;

        this.div.style.left = this.posX + "px";
        this.div.style.top = this.posY + "px";
    }

    addPlanks(){
        this.planks = new Array<Plank>();
        for(let i=0;i<9;i++){
            this.planks.push(new Plank(this, 80, 23 +(104 * i)));
        }
    }

    public throwRock(e: MouseEvent){
        this.rock = new Rock();
    }
}
