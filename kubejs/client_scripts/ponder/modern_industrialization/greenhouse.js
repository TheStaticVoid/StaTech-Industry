Ponder.registry((event) => {
    event.create('modern_industrialization:greenhouse').scene('greenhouse', 'The Industrial Greenhouse', 'kubejs:industrial_greenhouse', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.8);
        // Show base plate
        scene.world.showSection([0, 0, 0, 8, 0, 8], Facing.DOWN);
        scene.idle(10);

        // Build the first layer
        for (let x = 0; x < 9; x++) {
            for (let z = 0; z < 9; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        
        scene
            .text(80, 'The center block is a dirt block. This will go directly under the logs', [4.0, 3.0, 4.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(100);

        scene
            .text(80, 'Hatches can only replace the Steel Machine Casings on the first layer', [3.0, 3.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(100);

        // Build layer 2 - 5
        for (let y = 2; y < 6; y++) {
            for (let x = 0; x < 9; x++) {
                for (let z = 0; z < 9; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(80, 'The logs must be oak for the multiblock. They do not determine which recipe can be run in the multiblock.', [4.0, 6.0, 4.0])
                .colored(PonderPalette.WHITE)
                .placeNearTarget()
                .attachKeyFrame();
            scene.idle(100);
        
        // Build the rest
        for (let y = 6; y < 9; y++) {
            for (let z = 0; z < 9; z++) {
                for (let x = 0; x < 9; x++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }
    });
});