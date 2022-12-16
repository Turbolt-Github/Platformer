scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 731, 152, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.splash("You Deded")
    Slime_Player.setPosition(Checkpoint_X, Checkpoint_Y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Checkpoint`, function (sprite, location) {
    if (Play_Sound_Checkpoint < 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 731, 3183, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else {
    	
    }
    Checkpoint_X = 1128
    Checkpoint_Y = 56
    Play_Sound_Checkpoint += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 731, 152, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.splash("You Deded")
    Slime_Player.setPosition(Checkpoint_X, Checkpoint_Y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava`, function (sprite, location) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 731, 152, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.splash("You Deded")
    Slime_Player.setPosition(Checkpoint_X, Checkpoint_Y)
})
let Play_Sound_Checkpoint = 0
let Checkpoint_Y = 0
let Checkpoint_X = 0
let Slime_Player: Sprite = null
Slime_Player = sprites.create(assets.image`Player`, SpriteKind.Player)
Slime_Player.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(Slime_Player, 100, 0)
Slime_Player.ay = 250
scene.setBackgroundImage(assets.image`Sky`)
tiles.setCurrentTilemap(tilemap`Level-1`)
Checkpoint_X = 6
Checkpoint_Y = 2
scene.cameraFollowSprite(Slime_Player)
Play_Sound_Checkpoint = 0
forever(function () {
    if (controller.B.isPressed() || controller.up.isPressed()) {
        if (Slime_Player.vy == 0) {
            Slime_Player.vy += -140
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
    }
})
