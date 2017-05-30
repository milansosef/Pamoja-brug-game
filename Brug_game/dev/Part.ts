class Part {
    protected div: HTMLElement;

    constructor() {

    }

    public createDiv(){
        this.div = document.createElement("part");
        document.body.appendChild(this.div);
    }
}