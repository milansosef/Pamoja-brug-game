class Broken extends Part {

    constructor(){
        super();
    }

    createDiv(){
        this.div = document.createElement("broken");
        document.body.appendChild(this.div);
    }
}