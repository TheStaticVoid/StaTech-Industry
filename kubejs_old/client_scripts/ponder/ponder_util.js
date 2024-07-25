//priority:99
// -----------------------------------------
// CREATED BY FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

/**
 * Shows the entirety of the base plate at y=0
 * @param {*} scene 
 * @param {int} width 
 * @param {int} depth 
**/
let showBasePlate = (scene, width, depth) => {
    scene.world.showSection([0, 0, 0, width - 1, 0, depth - 1], Facing.DOWN);
    scene.idle(5);
}

/**
 * Builds the structure from y=1 to the desired height with a low idle
 * time between layers and blocks
 * @param {*} scene 
 * @param {int} width 
 * @param {int} depth 
 * @param {int} height 
 */
let buildUpToYFast = (scene, width, depth, height) => {
    this.buildUpToY(scene, width, depth, height, 1);
}

/**
 * Builds the structure from y=1 to the desired height with a normal idle
 * time between layers and blocks
 * @param {*} scene 
 * @param {int} width 
 * @param {int} depth 
 * @param {int} height 
 */
let buildUpToYRegular = (scene, width, depth, height) => {
    this.buildUpToY(scene, width, depth, height, 3);
}

/**
 * Builds from the first layer up to the specified height
 * @param {*} scene 
 * @param {int} width 
 * @param {int} depth 
 * @param {int} height 
 * @param {int} speed 
 */
let buildUpToY = (scene, width, depth, height, speed) => {
    this.buildUpSlice(scene, width, depth, 1, height, speed);
}

/**
 * Builds the structure from the specified starting height to the desired height
 * @param {*} scene 
 * @param {int} width 
 * @param {int} depth 
 * @param {int} starting 
 * @param {int} height 
 * @param {int} speed 
 */
let buildUpSlice = (scene, width, depth, starting, height, speed) => {
    if (starting == height) {
        for (let x = 0; x < width; x++) {
            for (let z = 0; z < depth; z++) {
                scene.world.showSection([x, height, z], Facing.DOWN);
            }
            scene.idle(speed);
        }
    } else {
        for (let y = starting; y < height; y++) {
            for (let x = 0; x < width; x++) {
                for (let z = 0; z < depth; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(speed);
            }
            scene.idle(speed + 2);
        }
        scene.idle(20);
    }
}

/**
 * Adds text to the screen with the desired duration and location
 * @param {*} scene 
 * @param {int} duration 
 * @param {string} text 
 * @param {*} color 
 * @param {double[]} coords
 */
let addText = (scene, duration, text, color, coords) => {
    if (!coords) {
        console.info(text);
    }
    let callback = scene
        .text(duration, text, [coords[0], coords[1], coords[2]])
        .placeNearTarget()
        .attachKeyFrame();
    if (color != null) {
        callback.colored(color);
    }

    scene.idle(duration+20);
}

/**
 * Rotates the scene on the Y axis by the specified amount
 * @param {*} scene 
 * @param {int} degrees 
 */
let rotateScene = (scene, degrees) => {
    for (let degree = 0; degree <= degrees; degree++) {
        scene.rotateCameraY(1);
        if (degree % 6 == 0) scene.idle(1);
    }
    scene.idle(20);
}

/**
 * Replaces the block in the selection with the specified block
 * @param {*} scene 
 * @param {*} block 
 * @param {int[]} pos1 
 * @param {int[]} pos2 
 */
let replaceBlocks = (scene, block, pos1, pos2) => {
    if (pos2) {
        scene.world.replaceBlocks([pos1[0], pos1[1], pos1[2], pos2[0], pos2[1], pos2[2]], block, true);
    } else {
        scene.world.replaceBlocks([pos1[0], pos1[1], pos1[2]], block, true);
    }
}

/**
 * Creates a structure size object and returns it 
 * @param {int} x 
 * @param {int} y 
 * @param {int} z 
 * @returns Object with width, ehight, depth values
 */
let structureSize = (x, y, z) => {
    return {
        width: x,
        height: y,
        depth: z
    };
}