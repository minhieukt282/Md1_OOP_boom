class Boundary {
    static width = 45
    static height = 45

    constructor({position, image}) {
        this.position = position;
        this.width = 45
        this.height = 45
        this.image = image
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
}