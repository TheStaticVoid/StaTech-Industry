Ponder.registry((event) => {
    event.create('modern_industrialization:steam_quarry').scene('steam_quarry', 'The Steam Quarry', 'kubejs:steam_quarry', (scene, util) => {
        // Grass Layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        // First Layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z ++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The Chain goes in the center of the multiblock', [2.0, 2.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // Second Layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 2, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        scene.idle(30);

        // Final layers
        for (let y = 3; y < 7; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }
    })
})