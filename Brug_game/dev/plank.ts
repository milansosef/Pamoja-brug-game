class Plank {
    private div: HTMLElement;
    private hole: string;
    private image: string;
    private bridge: Bridge;
    private x: number;
    private y: number;

    constructor(b: Bridge, x:number, y:number ){
        this.bridge = b;
        this.x = x;
        this.y = y;
        console.log("Plank created");
        this.init();
    }

    private init(){
        let imageURLs = ["Broken_Left.png","Broken_middle.png","Broken_Right.png","Stairs_1.png","Stairs_2.png","Stairs_3.png"];
        let randomizer = Math.floor(Math.random() * 6);
        this.image = imageURLs[randomizer];

        switch(randomizer) {
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

    private createDiv(){
        this.div = document.createElement("plank" + this.randomInt(1,4));
        this.bridge.div.appendChild(this.div);

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px";
    }

    private randomInt(min:number, max:number){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }   
}