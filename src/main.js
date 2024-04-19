import {k} from "./kaboomContext.js";
import {scaleFactor} from "./constants.js";

// Load character sprite
k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
        "idle-down": 952,
        "walk-down": { from: 952, to: 955, loop: true, speed: 8},
        "idle-side": 991,
        "walk-side": { from: 991, to: 994, loop: true, speed: 8},
        "idle-up": 1030,
        "walk-up": { from: 1030, to: 1033, loop: true, speed: 8},
    }
});

// Set map and background
k.loadSprite("map", "./map.png");
k.setBackground(k.Color.fromHex("#311047"));

// Creating a scene
k.scene("main", async () => {
    const mapData = await (await fetch("./map.json")).json();
    const layers = mapData.layers;

    const map = k.make([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

    const player = k.make([
        k.sprite("spritesheet", {anim: "idle-down"}),
        // area = hitbox
        k.area({
        shape: new k.Rect(k.vec2(0, 3), 10, 10)
        }),
        k.body(),
        k.anchor("center"),
        k.pos(),
        k.scale(scaleFactor),
        {
            speed: 250,
            direction: "down",
            isInDialogue: false
        },
        "player",
    ]);

    // Display dialog when the player collide with a boundary
    for(const layer of layers) {
        if(layer.name === "bounderies") {
            for(const boundary of layer.objects) {
                map.add([
                    k.area({
                        shape: new k.Rect(k.vec2(0), boundary.width, boundary.height)
                    }),
                    k.body({isStatic: true}),
                    k.pos(boundary.x, boundary.y),
                    boundary.name
                ]);

                if(boundary.name) {
                    player.onCollide(boundary.name, () => {
                        player.isInDialog = true;
                    })
                }
            }
        }
    }

});

// Defining a default scene
k.go("main")
