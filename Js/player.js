class Player {
    constructor({position, speed, image}) {
        this.position = position
        this.speed = speed
        this.image = image
        this.width = 30
        this.height = 32
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}