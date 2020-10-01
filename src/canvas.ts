class Canvas {
    public canvas = document.createElement('canvas');
    public c = this.canvas.getContext('2d');

    constructor() {
        this.init();
    }

    private init = () => {
        this.canvas.height = innerHeight;
        this.canvas.width = innerWidth;

        this.canvas.style.position = "fixed";
        this.canvas.style.top = "0px";
        this.canvas.style.left = "0px";
        this.canvas.style.background = "lightblue";

        document.body.appendChild(this.canvas);
    }
}

export default new Canvas();
