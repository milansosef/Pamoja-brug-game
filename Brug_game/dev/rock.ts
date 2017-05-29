class Rock {
    private div: HTMLElement;

    constructor(){
        console.log("Rock thrown!");
        this.createDiv();
    }

    private createDiv(){
        this.div = document.createElement("rock");
        document.body.appendChild(this.div);
    }
}