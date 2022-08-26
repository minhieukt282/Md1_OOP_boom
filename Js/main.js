const btn = document.getElementById("btn")
const rebtn = document.getElementById("rebtn")

var checkStatusBoomBang = false
var boundaries = []
var booms = []
var boomBangs = []
var boomPosition = []

//creat map block
function imageMap(src) {
    let image = new Image()
    image.src = src
    return image
}

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
                        image: imageMap('../Image/pipeHorizontal.png')
                        // image: imageMap('../Image/Untitled-1.png')

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
                        image: imageMap('../Image/pipeVertical.png')

                    })
                )
                break
            case '1':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }, image: imageMap('../Image/pipeCorner1.png')

                    })
                )
                break
            case '2':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }, image: imageMap('../Image/pipeCorner2.png')

                    })
                )
                break
            case '3':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }, image: imageMap('../Image/pipeCorner3.png')

                    })
                )
                break
            case '4':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }, image: imageMap('../Image/pipeCorner4.png')

                    })
                )
                break
            case 'b':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }, image: imageMap('../Image/block.png')

                    })
                )
                break
            case '[':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        }, image: imageMap('../Image/capLeft.png')

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
                        image: imageMap('../Image/capRight.png')
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
                        image: imageMap('../Image/capBottom.png')
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
                        image: imageMap('../Image/capTop.png')
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
                        image: imageMap('../Image/pipeCross.png')
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
                        image: imageMap('../Image/pipeConnectorTop.png')
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
                        image: imageMap('../Image/pipeConnectorRight.png')
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
                        image: imageMap('../Image/pipeConnectorBottom.png')
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
                        image: imageMap('../Image/pipeConnectorLeft.png')
                    })
                )
                break
            case 'v':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: imageMap('../Image/pipeConnectorRight.png')
                    })
                )
                break
            case '10':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width,
                            y: i * Boundary.height
                        },
                        image: imageMap('../Image/pipeConnectorLeft.png')
                    })
                )
                break
        }
    })
})

//creat player image
let imagePlayer = new Image()
imagePlayer.src = '../Image/bomber_down.png'

//creat player
let player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 + 250,
        y: Boundary.height + Boundary.height / 2 + 50
    }, speed: {
        x: 0,
        y: 0
    }, image: imagePlayer
})

//creat Image enemy
let imageEnemy = new Image()
imageEnemy.src = '../Image/monster_down.png'

let imageEnemy2 = new Image()
imageEnemy2.src = '../Image/monster_down.png'

// creat enemy
let enemy = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 + 180,
        y: Boundary.height + Boundary.height / 2 + 100
        // x: -50,
        // y: -50
    }, speed: {
        x: 0,
        y: Math.floor(Math.random() * (1.5 - 1 + 1)) + 1
    }, image: imageEnemy
})

let enemy2 = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 - 18,
        y: Boundary.height + Boundary.height / 2
        // x: -50,
        // y: -50
    }, speed: {
        x: Math.floor(Math.random() * (1.5 - 1 + 1)) + 1,
        y: 0
    }, image: imageEnemy2
})

//creat Boom image
const imageBoom = new Image()
imageBoom.src = '../Image/bomb.png'

//creat boom
let boom = new Boom({
    position: {
        x: -50,
        y: -50
    }, image: imageBoom
})

//creat BoomBang Image
function imageBoomBang(src) {
    let image = new Image()
    image.src = src
    return image
}

//creat BoomBang
const imageBoomBangs = [imageBoomBang('../Image/bomBangUp.png'),
    imageBoomBang('../Image/bomBangLeft.png'),
    imageBoomBang('../Image/bomBangDown.png'),
    imageBoomBang('../Image/bomBangRight.png')
]

for (let i = 0; i < 4; i++) {
    boomBangs.push(
        new BoomBang({
            position: {
                x: -100,
                y: -100
            },
            image: imageBoomBangs[i]
        })
    )
}
boomBangs.forEach((item) => {
    console.log(item)
})

function playerCollidesWidhRectangle({circle, rectangle}) {
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

function boomBangCollidesRectangle({boomBang, boundary}) {
    return (boomBang.position.x + boomBang.width >= boundary.position.x &&
        boomBang.position.x <= boundary.position.x + boundary.width &&
        boomBang.position.y + boomBang.height >= boundary.position.y &&
        boomBang.position.y <= boundary.position.y + boundary.height)
}

function playerCollidesMonster({player, monster}) {
    return (player.position.x + player.width + player.speed.x >= monster.position.x &&
        player.position.x + player.speed.x <= monster.position.x + monster.width &&
        player.position.y + player.height + player.speed.y >= monster.position.y &&
        player.position.y + player.speed.y <= monster.position.y + monster.height)
}

const direction = -1 // Enemy chuyen huong chuyen dong
var checkDirection
var countMonster = 0 //dem quai
var animationId

function animation() {
    animationId = requestAnimationFrame(animation)
    c.clearRect(0, 0, c.width, c.height)
    // Math.floor(Math.random() * (max - min + 1) ) + min;
    checkDirection = Math.floor(Math.random() * (1 - -1 + 1)) + -1;

    boundaries.forEach((boundary) => {
        boundary.draw()
        if (playerCollidesWidhRectangle({circle: player, rectangle: boundary})) {
            player.speed.x = 0
            player.speed.y = 0
        }

        // enemy random movement
        if (checkDirection <= 0) {
            if (playerCollidesWidhRectangle({circle: enemy, rectangle: boundary})) {
                enemy.speed.x = 1.5 * direction
                enemy.speed.y = 0
                console.log(enemy.speed.x + " speed_1_X " + checkDirection)
            }
        } else {
            if (playerCollidesWidhRectangle({circle: enemy, rectangle: boundary})) {
                enemy.speed.x = 0
                enemy.speed.y = 1.2 * direction
                console.log(enemy.speed.y + " speed_1_Y " + checkDirection)
            }
        }
        if (playerCollidesWidhRectangle({circle: enemy, rectangle: boundary})) {
            enemy.speed.x = enemy.speed.x * direction
            enemy.speed.y = enemy.speed.y * direction
        }

        // enemy2 random movement
        if (checkDirection <= 0) {
            if (playerCollidesWidhRectangle({circle: enemy2, rectangle: boundary})) {
                enemy2.speed.x = 1.5 * direction
                enemy2.speed.y = 0
                console.log(enemy2.speed.x + " speed_2_X " + checkDirection)
            }
        } else {
            if (playerCollidesWidhRectangle({circle: enemy2, rectangle: boundary})) {
                enemy2.speed.x = 0
                enemy2.speed.y = 1.2 * direction
                console.log(enemy2.speed.y + " speed_2_Y " + checkDirection)
            }
        }
        if (playerCollidesWidhRectangle({circle: enemy2, rectangle: boundary})) {
            enemy2.speed.x = enemy2.speed.x * direction
            enemy2.speed.y = enemy2.speed.y * direction
        }

        for (let i = 0; i < boomBangs.length; i++) {
            if (boomBangCollidesRectangle({boomBang: boomBangs[i], boundary: boundary})) {
                // boomBangs.splice(boomBangs[i], 1)
                console.log("boom cham tuong")
            }
        }

    })
    // set Image monster
    if (enemy.speed.x < 0) imageEnemy.src = '../Image/monster_left.png'
    if (enemy.speed.x > 0) imageEnemy.src = '../Image/monster_right.png'
    if (enemy.speed.y < 0) imageEnemy.src = '../Image/monster_up.png'
    if (enemy.speed.y > 0) imageEnemy.src = '../Image/monster_down.png'

    if (enemy2.speed.x < 0) imageEnemy2.src = '../Image/monster_left.png'
    if (enemy2.speed.x > 0) imageEnemy2.src = '../Image/monster_right.png'
    if (enemy2.speed.y < 0) imageEnemy2.src = '../Image/monster_up.png'
    if (enemy2.speed.y > 0) imageEnemy2.src = '../Image/monster_down.png'


    enemy.updatePlayer()
    enemy2.updatePlayer()
    boom.updateBoom()
    player.updatePlayer()
    for (let i = 0; i < boomBangs.length; i++) {
        boomBangs[i].updateBoomBang()
    }


    //draw boomBang
    if (checkStatusBoomBang) {
        for (let i = 0; i < boomBangs.length; i++) {
            boomBangs[i].updateBoomBang()
        }
        //Set time bombang
        setTimeout(() => {
            checkStatusBoomBang = false
            boomBangs[0].position = {
                x: -450,
                y: -450
            }
            boomBangs[1].position = {
                x: -410,
                y: -490
            }
            boomBangs[2].position = {
                x: -450,
                y: -490
            }
            boomBangs[3].position = {
                x: -450,
                y: -490
            }
            audioSrc('../Audio/bombangV2.mp3')
        }, 250)

    }
    for (let i = 0; i < boomBangs.length; i++) {
        if (playerCollidesBoomBang({player: player, boomBang: boomBangs[i]})) {
            imagePlayer.src = '../Image/bomber_dead.png'

            console.log("Va cham boom")
        }
        // enemy die
        if (playerCollidesBoomBang({player: enemy, boomBang: boomBangs[i]})) {
            countMonster++
            enemy.position = {
                x: -50,
                y: -50
            }
            enemy.speed = {
                x: 0,
                y: 0
            }
            audioSrc('../Audio/monster_die.mp3')
        }
        if (playerCollidesBoomBang({player: enemy2, boomBang: boomBangs[i]})) {
            countMonster++
            enemy2.position = {
                x: -50,
                y: -50
            }
            enemy2.speed = {
                x: 0,
                y: 0
            }
            audioSrc('../Audio/monster_die.mp3')
        }
    }

    // endgame
    if (playerCollidesMonster({player: player, monster: enemy})) {
        console.log("dead")
        player.position = {
            x: -50,
            y: -50
        }
        audioSrc('../Audio/bomber_die.mp3')
        alert("YOU LOSS")
        cancelAnimationFrame(animationId)
    }
    if (playerCollidesMonster({player: player, monster: enemy2})) {
        console.log("dead")
        player.position = {
            x: -50,
            y: -50
        }
        audioSrc('../Audio/bomber_die.mp3')
        alert("YOU LOSS")
        cancelAnimationFrame(animationId)
    }
    if (countMonster >= 2) {
        setTimeout(() => {
            alert("YOU WIN")
            cancelAnimationFrame(animationId)
        }, 1000)
        countMonster = 0
    }
}

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
        audioSrc('../Audio/newbomb.mp3')
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
        setTimeout(() => {
            boomBangs[0].position = {
                x: boom.position.x,
                y: boom.position.y - 40
            }
            boomBangs[1].position = {
                x: boom.position.x - 40,
                y: boom.position.y + 40 - 40
            }
            boomBangs[2].position = {
                x: boom.position.x,
                y: boom.position.y + 40 - 40
            }
            boomBangs[3].position = {
                x: boom.position.x,
                y: boom.position.y + 40 - 40
            }

            boom.position = {
                x: -50,
                y: -50
            }
            checkStatusBoomBang = true;
        }, 2000)
    }
})

function start() {
    animation()
    btn.style.display = 'none'
}

// function reStart() {
//     player.position = {
//         x: Boundary.width + Boundary.width / 2 + 250,
//         y: Boundary.height + Boundary.height / 2 + 150
//     }
//     player.speed = {
//         x: 0,
//         y: 0
//     }
//     enemy.position = {
//         x: Boundary.width + Boundary.width / 2 + 180,
//         y: Boundary.height + Boundary.height / 2 + 100
//     }
//     enemy.speed = {
//         x: 0,
//         y: Math.floor(Math.random() * (1.5 - 1 + 1)) + 1
//     }
//     enemy2.position = {
//         x: Boundary.width + Boundary.width / 2 - 18,
//         y: Boundary.height + Boundary.height / 2
//         // x: -50,
//         // y: -50
//     }
//     enemy2.speed = {
//         x: Math.floor(Math.random() * (1.5 - 1 + 1)) + 1,
//         y: 0
//     }
//     start()
//     rebtn.style.display = 'none'
// }