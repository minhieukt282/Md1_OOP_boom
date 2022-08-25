class Boom {
    constructor({position, image}) {
        this.position = position
        this.image = image
        this.width = 35
        this.height = 35
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    updateBoom() {
        this.draw()
    }
}