// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:implosion_compressor').scene('implosion_compressor', 'The Implosion Compressor', 'kubejs:implosion_compressor', (scene, util) => {
        // Base plate
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);
        scene.idle(10);

        // Build the first layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'Hatches can only go on the bottom layer', [1.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);
        
        // Next two layers
        for (let y = 2; y < 4; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The inside is hollow', [2.0, 4.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);
        
        // The final layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 4, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene.idle(20);
    });
});