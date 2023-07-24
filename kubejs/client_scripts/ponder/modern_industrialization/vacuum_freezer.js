// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:vacuum_freezer').scene('vacuum_freezer', 'The Vacuum Freezer', 'kubejs:vacuum_freezer', (scene, util) => {
        // Base plate
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);

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
            .text(60, 'The center is hollow', [2.0, 4.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(60);

        // Last layers
        for (let y = 3; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }
        scene.idle(60);
    });
});