Ponder.registry((event) => {
    event.create('modern_industrialization:large_steam_turbine').scene('large_steam_turbine', 'The Large Steam Turbine', 'kubejs:large_steam_turbine', (scene, util) => {
        // Base plate
        scene.world.showSection([0, 0, 0, 4, 0, 5], Facing.DOWN);
        scene.idle(10);

        // Build the layers
        for (let y = 1; y < 4; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 6; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The Fluid Input Hatch must go in the front of the multiblock', [1.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Rotate 180
        for (let degree = 0; degree <= 180; degree++) {
            scene.rotateCameraY(1);
            if (degree % 6 == 0) scene.idle(1);
        }

        scene
            .text(60, 'The Energy Output Hatch goes in the back middle block', [2.0, 2.0, 4.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);
    });
});