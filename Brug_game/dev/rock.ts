class Rock {
    private div: HTMLElement;

    constructor(){
        console.log("Rock thrown!");
        this.div = document.createElement("rock");
        document.body.appendChild(this.div);
    }
}