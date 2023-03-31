Ponder.registry((event) => {
    event.create('modern_industrialization:steam_blast_furnace').scene('steam_blast_furnace', 'The Steam Blast Furnace', 'kubejs:steam_blast_furnace', (scene, util) => {
        // Grass layer
        for (let x = 0; x < 5; x++ ) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        // First layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(180, 'Fluid Input, Item Input, and Item Output can be placed in any configuration on the top and bottom layers', [1.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(180);

        // Second layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 2, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'Note that the center is hollow', [2.0, 3.0, 2.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // Third and Fourth Layer
        for (let y = 3; y < 5; y++) {
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