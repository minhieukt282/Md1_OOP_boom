const c = document.getElementById("myCanvas").getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

class Boundary {
    static width = 45
    static height = 65

    constructor({position}) {
        this.position = position;
        this.width = 45
        this.height = 65
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Player {
    constructor({position, speed, image}) {
        this.position = position
        this.speed = speed
        this.radius = 15
        this.image = image
        this.width = 45
        this.height = 65
    }

    draw() {
        // c.beginPath();
        // c.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        // c.fillStyle = 'red';
        // c.fill();
        // c.closePath()
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
}

// function creatImage(src){
//     const image = new Image()
//     image.src = src
//     return image
// }
const image = new Image()
image.src = '../Image/bomber_down.png'
let player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 -20 ,
        y: Boundary.height + Boundary.height /2
    }, speed: {
        x: 0,
        y: 0
    }, image: image
})
console.log(player.position)
// const keys = {
//     w: {
//         pressed: false
//     },
//     a: {
//         pressed: false
//     },
//     d: {
//         pressed: false
//     },
//     s: {
//         pressed: false
//     }
//
// }
let lastKey = ' '
const map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-'],
    ['-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-'],
    ['-', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '-'],
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
    // return (circle.position.y - circle.radius + circle.speed.y <= rectangle.position.y + rectangle.height &&
    //     circle.position.x + circle.radius + circle.speed.x >= rectangle.position.x &&
    //     circle.position.y + circle.radius + circle.speed.y >= rectangle.position.y &&
    //     circle.position.x - circle.radius + circle.speed.x <= rectangle.position.x + rectangle.width)

    return (circle.position.x + circle.width + circle.speed.x >= rectangle.position.x  &&
        circle.position.x + circle.speed.x <= rectangle.position.x + rectangle.width &&
        circle.position.y + circle.height + circle.speed.y >= rectangle.position.y &&
        circle.position.y + circle.speed.x <= rectangle.position.y + rectangle.height)
}


function animation() {
    requestAnimationFrame(animation)
    c.clearRect(0, 0, c.width, c.height)

    // if (keys.w.pressed && lastKey === 'w') {
    //     for (let i = 0; i < boundaries.length; i++) {
    //         const boundary = boundaries[i]
    //         if (circleCollidesWidhRectangle({
    //             circle: {
    //                 ...player, speed: {
    //                     x: 0,
    //                     y: -3
    //                 }
    //             }, rectangle: boundary
    //         })) {
    //             player.speed.y = 0
    //             break
    //         } else {
    //             player.speed.y = -3
    //         }
    //     }
    // } else if (keys.a.pressed && lastKey === 'a') {
    //     for (let i = 0; i < boundaries.length; i++) {
    //         const boundary = boundaries[i]
    //         if (circleCollidesWidhRectangle({
    //             circle: {
    //                 ...player, speed: {
    //                     x: -3,
    //                     y: 0
    //                 }
    //             }, rectangle: boundary
    //         })) {
    //             player.speed.x = 0
    //             break
    //         } else {
    //             player.speed.x = -3
    //         }
    //     }
    // } else if (keys.s.pressed && lastKey === 's') {
    //     for (let i = 0; i < boundaries.length; i++) {
    //         const boundary = boundaries[i]
    //         if (circleCollidesWidhRectangle({
    //             circle: {
    //                 ...player, speed: {
    //                     x: 0,
    //                     y: 3
    //                 }
    //             }, rectangle: boundary
    //         })) {
    //             player.speed.y = 0
    //             break
    //         } else {
    //             player.speed.y = 3
    //         }
    //     }
    // } else if (keys.d.pressed && lastKey === 'd') {
    //     for (let i = 0; i < boundaries.length; i++) {
    //         const boundary = boundaries[i]
    //         if (circleCollidesWidhRectangle({
    //             circle: {
    //                 ...player, speed: {
    //                     x: 3,
    //                     y: 0
    //                 }
    //             }, rectangle: boundary
    //         })) {
    //             player.speed.x = 0
    //             break
    //         } else {
    //             player.speed.x = 3
    //         }
    //     }
    // }

    boundaries.forEach((boundary) => {
        boundary.draw()
        if (circleCollidesWidhRectangle({circle: player, rectangle: boundary})) {
            console.log(player.position)
            console.log(player.speed)
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
            player.speed.y = -5
            image.src = '../Image/bomber_up.png'
            break
        case 'a':
            player.speed.x = -5
            image.src = '../Image/bomber_left.png'
            break
        case 's':
            player.speed.y = 5
            image.src = '../Image/bomber_down.png'
            break
        case 'd':
            player.speed.x = 5
            image.src = '../Image/bomber_right.png'
            break
    }

})

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'w':
            player.speed.y =0
            image.src = '../Image/bomber_up.png'
            break
        case 'a':
            player.speed.x =0
            image.src = '../Image/bomber_left.png'
            break
        case 's':
            player.speed.y =0
            image.src = '../Image/bomber_down.png'
            break
        case 'd':
            player.speed.x =0
            image.src = '../Image/bomber_right.png'
            break
    }
    console.log(player.speed)
})
