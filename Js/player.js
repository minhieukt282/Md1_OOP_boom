class Player {
    constructor({position, speed, image}) {
        this.position = position
        this.speed = speed
        this.image = image
        this.width = 32
        this.height = 35
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    updatePlayer() {
        this.draw()
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}

