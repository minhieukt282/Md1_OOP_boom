
//creat map
const map = [
    ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
    ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
]

// const map = [
//     ['1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
//     ['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
//     ['|', '.', 'b', '.', '[', '7', ']', '.', 'b', '.', '|'],
//     ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
//     ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
//     ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
//     ['|', '.', 'b', '.', '[', '+', ']', '.', 'b', '.', '|'],
//     ['|', '.', '.', '.', '.', '_', '.', '.', '.', '.', '|'],
//     ['|', '.', '[', ']', '.', '.', '.', '[', ']', '.', '|'],
//     ['|', '.', '.', '.', '.', '^', '.', '.', '.', '.', '|'],
//     ['|', '.', 'b', '.', '[', '5', ']', '.', 'b', '.', '|'],
//     ['|', '.', '.', '.', '.', '.', '.', '.', '.', 'p', '|'],
//     ['4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '3']
// ]
const boundaries = []
map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '-':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case '|':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case '1':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case '2':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case '3':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case '4':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case 'b':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        },

                    })
                )
                break
            case '[':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },

                    })
                )
                break
            case ']':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },

                    })
                )
                break
            case '_':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },

                    })
                )
                break
            case '^':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },

                    })
                )
                break
            case '+':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },

                    })
                )
                break
            case '5':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        color: 'blue',

                    })
                )
                break
            case '6':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        color: 'blue',

                    })
                )
                break
            case '7':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        color: 'blue',

                    })
                )
                break
            case '8':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },

                    })
                )
                break
        }
    })
})

//creat player image
const imagePlayer = new Image()
imagePlayer.src = '../Image/bomber_down.png'

//creat player
let player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 - 18,
        y: Boundary.height + Boundary.height / 2
    }, speed: {
        x: 0,
        y: 0
    }, image: imagePlayer
})

//creat Image enemy
const imageEnemy = new Image()
imageEnemy.src = '../Image/monster_down.png'

//creat enemy
let enemy = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 - 18,
        y: Boundary.height + Boundary.height / 2
    }, image: imageEnemy
})

//creat Boom image
const imageBoom = new Image()
imageBoom.src = '../Image/bomb.png'

//creat boom
const booms = []
let boomPosition = []
let boom = new Boom({
    position: {
        x: -50,
        y: -50
    }, image: imageBoom
})
// booms.forEach((boom) => {
//     booms.push(new Boom({
//         position: {
//             x: 0,
//             y: 0
//         }, image = imageBoom
//     }))
// })

//creat BoomBang Image
const imageBoomBang = new Image()
// imageBoomBang.src = '../Image/bombbang_up_2.png'
imageBoomBang.src = '../Image/bombbang.png'
//creat BoomBang
let boomBang = new BoomBang({
    position: {
        x: -150,
        y: -150
    }, image: imageBoomBang
})


function circleCollidesWidhRectangle({circle, rectangle}) {
    return (circle.position.x + circle.width + circle.speed.x >= rectangle.position.x &&
        circle.position.x + circle.speed.x <= rectangle.position.x + rectangle.width &&
        circle.position.y + circle.height + circle.speed.y >= rectangle.position.y &&
        circle.position.y + circle.speed.y <= rectangle.position.y + rectangle.height)
}

function playerCollidesBoomBang({player, boomBang}) {
    return (player.position.x + player.width + player.speed.x >= boomBang.position.x &&
        player.position.x + player.speed.x <= boomBang.position.x + boomBang.width &&
        player.position.y + player.height + player.speed.y >= boomBang.position.y &&
        player.position.y + player.speed.y <= boomBang.position.y + boomBang.height)
}

function animation() {
    requestAnimationFrame(animation)
    c.clearRect(0, 0, c.width, c.height)
    boundaries.forEach((boundary) => {
        boundary.draw()
        if (circleCollidesWidhRectangle({circle: player, rectangle: boundary})) {
            player.speed.x = 0
            player.speed.y = 0
        }
        if (boomBang.position.x + boomBang.width >= boundary.position.x &&
            boomBang.position.x <= boundary.position.x + boundary.width &&
            boomBang.position.y + boomBang.height >= boundary.position.y &&
            boomBang.position.y <= boundary.position.y + boundary.height) {
            console.log("boom cham tuong")
        }
    })

    boom.update()
    player.update()
    boomBang.update()
    //draw boomBang
    if (checkStatusBoomBang) {
        boomBang.update();
        setTimeout(() => {
            checkStatusBoomBang = false
            boomBang.position = {
                x: -150,
                y: -150
            }
        }, 1000)
    }
    if (playerCollidesBoomBang({player, boomBang})) {
        imagePlayer.src = '../Image/bomber_dead.png'
        checkStatusPlayer = true
        console.log("Va cham boom")
    }
    // console.log(checkStatusPlayer)

}

var checkStatusBoomBang = false
var checkStatusPlayer = false

addEventListener('keydown', (key) => {


    if (key.keyCode === 87) {
        player.speed.y = -4
        imagePlayer.src = '../Image/bomber_up.png'
    }
    if (key.keyCode === 65) {
        player.speed.x = -4
        imagePlayer.src = '../Image/bomber_left.png'
    }
    if (key.keyCode === 83) {
        player.speed.y = 4
        imagePlayer.src = '../Image/bomber_down.png'
    }
    if (key.keyCode === 68) {
        player.speed.x = 4
        imagePlayer.src = '../Image/bomber_right.png'
    }


    if (key.keyCode === 66) {
        boomPosition.push({
            x: player.position.x,
            y: player.position.y,
        })
    }
})
addEventListener('keyup', (key) => {
    if (key.keyCode === 87) {
        player.speed.y = 0
        imagePlayer.src = '../Image/bomber_up.png'
    } else if (key.keyCode === 65) {
        player.speed.x = 0
        imagePlayer.src = '../Image/bomber_left.png'
    } else if (key.keyCode === 83) {
        player.speed.y = 0
        imagePlayer.src = '../Image/bomber_down.png'
    } else if (key.keyCode === 68) {
        player.speed.x = 0
        imagePlayer.src = '../Image/bomber_right.png'
    }
    if (key.keyCode === 66) {
        boom.position = {
            x: player.position.x,
            y: player.position.y
        }
        console.log(boom.position)
        console.log(boomBang.position)
        setTimeout(() => {
            boomBang.position = {
                x: boom.position.x - 53,
                y: boom.position.y - 53
            }
            boom.position = {
                x: -50,
                y: -50
            }
            checkStatusBoomBang = true;
        }, 2000)

    }
})


animation();
