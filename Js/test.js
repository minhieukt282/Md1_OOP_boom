//creat map block
function imageMap(src) {
    let image = new Image()
    image.src = src
    return image
}

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
                        }, image: imageMap('../Image/pipeHorizontal.png')

                    })
                )
                break
            case '|':
                boundaries.push(
                    new Boundary({
                        position: {
                            x: Boundary.width * j,
                            y: Boundary.height * i
                        }, image: imageMap('../Image/pipeVertical.png')

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
        }
    })
})

//creat player image
const imagePlayer = new Image()
imagePlayer.src = '../Image/bomber_down.png'

//creat player
let player = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 + 305,
        y: Boundary.height + Boundary.height / 2 - 20
    }, speed: {
        x: 0,
        y: 0
    }, image: imagePlayer
})

//creat Image enemy
const imageEnemy = new Image()
imageEnemy.src = '../Image/monster_down.png'

const imageEnemy2 = new Image()
imageEnemy2.src = '../Image/monster_down.png'

//creat enemy
let enemy = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 + 180,
        y: Boundary.height + Boundary.height / 2 + 100
    }, speed: {
        x: 0,
        y: Math.floor(Math.random() * (1.5 - 1 + 1) ) + 1
    }, image: imageEnemy
})

let enemy2 = new Player({
    position: {
        x: Boundary.width + Boundary.width / 2 - 18,
        y: Boundary.height + Boundary.height / 2
    }, speed: {
        x: Math.floor(Math.random() * (1.5 - 1 + 1) ) + 1,
        y: 0
    }, image: imageEnemy2
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

var direction = -1 // Enemy chuyen huong chuyen dong
var checkDirection
var countMonster = 0 //dem quai
function animation() {
    requestAnimationFrame(animation)
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
                // checkDirection  = Math.floor(Math.random() * 2)
                console.log(enemy.speed.x + " speed_1_X " + checkDirection)
            }
        } else {
            if (playerCollidesWidhRectangle({circle: enemy, rectangle: boundary})) {
                enemy.speed.x = 0
                enemy.speed.y = 1.2 * direction
                // checkDirection  = Math.floor(Math.random() * 2)
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
                // checkDirection  = Math.floor(Math.random() * 2)
                console.log(enemy2.speed.x + " speed_2_X " + checkDirection)
            }
        } else {
            if (playerCollidesWidhRectangle({circle: enemy2, rectangle: boundary})) {
                enemy2.speed.x = 0
                enemy2.speed.y = 1.2 * direction
                // checkDirection  = Math.floor(Math.random() * 2)
                console.log(enemy2.speed.y + " speed_2_Y " + checkDirection)
            }
        }
        if (playerCollidesWidhRectangle({circle: enemy2, rectangle: boundary})) {
            enemy2.speed.x = enemy2.speed.x * direction
            enemy2.speed.y = enemy2.speed.y * direction
        }

        if (boomBangCollidesRectangle({boomBang: boomBang, boundary: boundary})) {
            console.log("boom cham tuong")
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
    boomBang.updateBoomBang()

    //draw boomBang
    if (checkStatusBoomBang) {
        boomBang.updateBoomBang();
        setTimeout(() => {
            checkStatusBoomBang = false
            boomBang.position = {
                x: -150,
                y: -150
            }
        }, 250)
    }

    if (playerCollidesBoomBang({player, boomBang})) {
        imagePlayer.src = '../Image/bomber_dead.png'
        checkStatusPlayer = true
        console.log("Va cham boom")
    }
    if (playerCollidesBoomBang({player: enemy, boomBang: boomBang})) {
        countMonster++
        enemy.position = {
            x: -50,
            y: -50
        }
        enemy.speed = {
            x: 0,
            y: 0
        }
    }
    if (playerCollidesBoomBang({player: enemy2, boomBang: boomBang})) {
        countMonster++
        enemy2.position = {
            x: -50,
            y: -50
        }
        enemy2.speed = {
            x: 0,
            y: 0
        }
    }
    // endgame
    if (playerCollidesMonster({player: player, monster: enemy})) {
        console.log("dead")
        player.position = {
            x: -50,
            y: -50
        }
        alert("You lose")
    }
    // if (playerCollidesMonster({player: player, monster: enemy2})) {
    //     console.log("dead")
    //     player.position = {
    //         x: -50,
    //         y: -50
    //     }
    //     alert("You lose")
    // }
    if (countMonster == 1) {
        setTimeout(()=>{
            console.log("you Win")
        },1000)

        countMonster = 0
    }


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
