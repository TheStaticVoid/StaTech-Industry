// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:electric_blast_furnace').scene('electric_blast_furnace', 'The Electric Blast Furnace', 'kubejs:ebf_cupronickel', (scene, util) => {
        // Bottom layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        // First and second layer
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
            .text(30, 'Center is hollow', [2.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(30);

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

        scene
            .text(60, 'Hatches can go on the top or bottom rows', [2.0, 4.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        scene.world.hideSection([0, 2, 0, 5, 3, 5], Facing.EAST);
        scene.idle(20);
        scene.world.replaceBlocks([0, 2, 0, 5, 3, 5], 'modern_industrialization:kanthal_coil', false);
        scene.idle(20);
        scene.world.showSection([0, 2, 0, 5, 3, 5], Facing.WEST);

        scene
            .text(60, 'Kanthal Coils will upgrade the maximum EU that can be used in the Electric Blast Furnace')
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(60);
    });
});