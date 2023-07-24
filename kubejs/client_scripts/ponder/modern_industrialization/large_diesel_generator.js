// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_diesel_generator').scene('large_diesel_generator', 'The Large Diesel Generator', 'kubejs:large_diesel_generator', (scene, util) => {
        // Base plate
        scene.world.showSection([0, 0, 0, 4, 0, 5], Facing.DOWN);
        scene.idle(10);
        
        // First two layers
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 6; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'Fluid Input Hatches go on the sides', [1.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Last layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 6; z++) {
                scene.world.showSection([x, 3, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The complete multiblock', [2.0, 2.0, 2.0])
            .colored(PonderPalette.WHITE)
            .attachKeyFrame();
        scene.idle(60);

        // Rotate 180
        for (let degree = 0; degree <= 180; degree++) {
            scene.rotateCameraY(1);
            if (degree % 6 == 0) scene.idle(1);
        }

        scene.idle(20);
        scene
            .text(60, 'The Energy Output Hatch goes in the center back block', [2.0, 2.0, 4.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);
    });
});