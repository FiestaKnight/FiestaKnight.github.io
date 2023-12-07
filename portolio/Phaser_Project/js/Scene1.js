class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background", "media/knd-end.png");

        //this.load.image("ship", "media/ship.png");
        //this.load.image("ship2", "media/ship2.png");
        //this.load.image("ship3", "media/ship3.png");

        this.load.spritesheet("ship", "spritesheet/ship(1).png",{
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("ship2", "spritesheet/ship2(1).png",{
            frameWidth: 32,
            frameHeight: 16
        });

        this.load.spritesheet("ship3", "spritesheet/ship3(1).png",{
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet("explosion", "spritesheet/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("power-up", "spritesheet/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("player", "spritesheet/MiniLumis.png", {
            frameWidth: 16,
            frameHeight: 24
        });

        this.load.spritesheet("beam", "spritesheet/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.bitmapFont("pixelFont", "font/font.png", "font/font.xml");

        this.load.audio("audio_beam", ["audio/spit.wav"]);

        this.load.audio("audio_explosion", ["audio/bomb-explode.wav"]);

        this.load.audio("audio_pickup", ["audio/1up.wav"]);

        this.load.audio("music", ["audio/sci-fi_platformer12.ogg", "audio/sci-fi_platformer12.mp3"]);
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    
        this.anims.create({
          key: "ship1_anim",
          frames: this.anims.generateFrameNumbers("ship"),
          frameRate: 20,
          repeat: -1
        });
        this.anims.create({
          key: "ship2_anim",
          frames: this.anims.generateFrameNumbers("ship2"),
          frameRate: 20,
          repeat: -1
        });
        this.anims.create({
          key: "ship3_anim",
          frames: this.anims.generateFrameNumbers("ship3"),
          frameRate: 20,
          repeat: -1
        });
    
        this.anims.create({
          key: "explode",
          frames: this.anims.generateFrameNumbers("explosion"),
          frameRate: 20,
          repeat: 0,
          hideOnComplete: true
        });
    
        this.anims.create({
          key: "red",
          frames: this.anims.generateFrameNumbers("power-up", {
            start: 0,
            end: 1
          }),
          frameRate: 20,
          repeat: -1
        });
        this.anims.create({
          key: "gray",
          frames: this.anims.generateFrameNumbers("power-up", {
            start: 2,
            end: 3
          }),
          frameRate: 20,
          repeat: -1
        });
        this.anims.create({
          key: "thrust",
          frames: this.anims.generateFrameNumbers("player"),
          frameRate: 20,
          repeat: -1
        });
    
        // 1.2 animation for the beam
        this.anims.create({
          key: "beam_anim",
          frames: this.anims.generateFrameNumbers("beam"),
          frameRate: 20,
          repeat: -1
        });
    
      }
    }