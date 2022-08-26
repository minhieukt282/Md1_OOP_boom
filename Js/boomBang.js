class BoomBang {
    constructor({position, image}) {
        this.position = position
        this.image = image
        this.width = 30
        this.height = 60
    }


    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    updateBoomBang() {
        this.draw()

    }

}