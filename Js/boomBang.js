class BoomBang {
    constructor({position, image}) {
        this.position = position
        this.image = image
        this.width = 40
        this.height = 40
    }


    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    updateBoomBang() {
        this.draw()

    }

}