// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:boss_crusher').scene('boss_crusher', 'The Boss Crusher', 'kubejs:boss_crusher', (scene, util) => {
        // Bottom layer
        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        // Build the entire multi
        for (let y = 1; y < 6; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene.idle(20);

        scene
            .text('60', 'Hatches can only go on the top or bottom', [2.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

    });
})