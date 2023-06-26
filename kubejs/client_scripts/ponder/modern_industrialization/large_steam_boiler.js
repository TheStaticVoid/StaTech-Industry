Ponder.registry((event) => {
    event.create('modern_industrialization:large_steam_boiler').scene('large_steam_boiler', 'The Large Steam Boiler', 'kubejs:large_steam_boiler', (scene, util) => {
        // Bottom layer
        for (let x = 0; x < 5; x++) {
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
            .text(60, 'Bottom layer is made of Heatproof Machine Casings and hatches', [2.0, 2.0, 3.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // Second layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 2, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The center blocks are Bronze Pipe Machine Casing block', [2.0, 4.0, 2.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // For last tiers
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