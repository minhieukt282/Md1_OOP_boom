const c = document.getElementById("myCanvas").getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

class Boundary {
    static width = 40
    static height = 40

    constructor({position}) {
        this.position = position;
        this.width = 40
        this.height = 40
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Player {
    constructor({position, speed}) {
        this.position = position
        this.speed = speed
        this.radius = 15;
    }

    draw() {
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = 'red';
        c.fill();
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}

let player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2,
        y: Boundary.height + Boundary.height / 2
    }, speed: {
        x: 0,
        y: 0
    }
})
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    s: {
        pressed: false
    }

}
let lastKey = ' '
const map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-'],
    ['-', '_', '-', '-', '_', '-', '_', '-', '_', '-', '_', '-'],
    ['-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-'],
    ['-', '_', '-', '-', '_', '-', '_', '-', '_', '-', '_', '-'],
    ['-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
]
const boundaries = []
//creat map
map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '-':
                boundaries.push(new Boundary({
                    position: {
                        x: Boundary.width * j,
                        y: Boundary.height * i
                    }
                }))
                break
        }
    })
})

function circleCollidesWidhRectangle({circle, rectangle}) {
    return (circle.position.y - circle.radius + circle.speed.y <= rectangle.position.y + rectangle.height &&
        circle.position.x + circle.radius + circle.speed.x >= rectangle.position.x &&
        circle.position.y + circle.radius + circle.speed.y >= rectangle.position.y &&
        circle.position.x - circle.radius + circle.speed.x <= rectangle.position.x + rectangle.width)
}

function animation() {
    requestAnimationFrame(animation)
    c.clearRect(0, 0, c.width, c.height)

    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWidhRectangle({
                circle: {
                    ...player, speed: {
                        x: 0,
                        y: -3
                    }
                }, rectangle: boundary
            })) {
                player.speed.y = 0
                break
            } else {
                player.speed.y = -3
            }
        }
    } else if (keys.a.pressed && lastKey === 'a') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWidhRectangle({
                circle: {
                    ...player, speed: {
                        x: -3,
                        y: 0
                    }
                }, rectangle: boundary
            })) {
                player.speed.x = 0
                break
            } else {
                player.speed.x = -3
            }
        }
    } else if (keys.s.pressed && lastKey === 's') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWidhRectangle({
                circle: {
                    ...player, speed: {
                        x: 0,
                        y: 3
                    }
                }, rectangle: boundary
            })) {
                player.speed.y = 0
                break
            } else {
                player.speed.y = 3
            }
        }
    } else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (circleCollidesWidhRectangle({
                circle: {
                    ...player, speed: {
                        x: 3,
                        y: 0
                    }
                }, rectangle: boundary
            })) {
                player.speed.x = 0
                break
            } else {
                player.speed.x = 3
            }
        }
    }

    boundaries.forEach((boundary) => {
        boundary.draw()
        if (circleCollidesWidhRectangle({circle: player, rectangle: boundary})) {
            player.speed.x = 0
            player.speed.y = 0
        }
    })
    player.update()


}

animation();
addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }

})

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
    console.log(player.speed)
})
