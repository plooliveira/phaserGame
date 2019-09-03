import Scene1 from "./Scene1"

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "555",
    parent: 'phaser-example',
    scene: {
        preload: Scene1,
    }
};

export var game = new Phaser.Game(config);


