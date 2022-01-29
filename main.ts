sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
function doBelka () {
    gaplen = randint(2, 8)
    leftlen = randint(1, 10 - (gaplen + 1))
    rightlen = 10 - (gaplen + leftlen)
    if (leftlen == 1) {
        projecttileimg = assets.image`Lewy1`
    } else if (leftlen == 2) {
        projecttileimg = assets.image`lewy2`
    } else if (leftlen == 3) {
        projecttileimg = assets.image`lewy3`
    } else if (leftlen == 4) {
        projecttileimg = assets.image`Lewy4`
    } else if (leftlen == 5) {
        projecttileimg = assets.image`Lewy5`
    } else if (leftlen == 6) {
        projecttileimg = assets.image`Lewy6`
    } else if (leftlen == 7) {
        projecttileimg = assets.image`Lewy7`
    }
    projectile = sprites.createProjectileFromSide(projecttileimg, 0, 50)
    projectile.top = 0
    projectile.left = 0
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    if (rightlen == 1) {
        projecttileimg = assets.image`Lewy1`
    } else if (rightlen == 2) {
        projecttileimg = assets.image`lewy2`
    } else if (rightlen == 3) {
        projecttileimg = assets.image`lewy3`
    } else if (rightlen == 4) {
        projecttileimg = assets.image`Lewy4`
    } else if (rightlen == 5) {
        projecttileimg = assets.image`Lewy5`
    } else if (rightlen == 6) {
        projecttileimg = assets.image`Lewy6`
    } else if (rightlen == 7) {
        projecttileimg = assets.image`Lewy7`
    }
    projectile = sprites.createProjectileFromSide(projecttileimg, 0, 50)
    projectile.top = 0
    projectile.right = scene.screenWidth()
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
}
let projectile: Sprite = null
let projecttileimg: Image = null
let rightlen = 0
let leftlen = 0
let gaplen = 0
let mySprite = sprites.create(assets.image`Samolocik`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.bottom = scene.screenHeight()
let predkosc = randint(5, 20)
game.onUpdateInterval(100, function () {
    predkosc += -1
    if (predkosc <= 0) {
        doBelka()
        predkosc = randint(5, 20)
    }
})
