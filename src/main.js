import {k} from "./kaboomContext.js";

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

// Load map sprite
k.loadSprite("map", "./map.png");

// Set background
k.setBackground(k.Color.fromHex("#311047"));
