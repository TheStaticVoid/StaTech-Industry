Ponder.registry((event) => {
    event.create('modern_industrialization:high_pressure_large_steam_boiler').scene('high_pressure_large_steam_boiler', 'The High Pressure Large Steam Boiler', 'kubejs:high_pressure_large_steam_boiler', (scene, util) => {
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
            .text(60, 'The Hatches must go on the base plate', [2.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        scene
            .text(60, 'The center blocks are Stainless Steel Pipe Machine Casing', [2.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // The rest of the layers
        for (let y = 3; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }
    });
});