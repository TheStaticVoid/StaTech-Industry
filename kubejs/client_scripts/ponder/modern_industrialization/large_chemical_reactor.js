// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_chemical_reactor').scene('large_chemical_reactor', 'The Large Chemical Reactor', 'kubejs:large_chemical_reactor', (scene, util) => {
        // Base plate
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);
        scene.idle(10);

        // First two layers
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The center is a PTFE Machine Pipe Casing', [2.0, 3.0, 2.0])
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
        scene.idle(20);
    });
});