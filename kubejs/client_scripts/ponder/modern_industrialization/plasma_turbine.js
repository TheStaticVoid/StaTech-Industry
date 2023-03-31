Ponder.registry((event) => {
    event.create('modern_industrialization:plasma_turbine').scene('plasma_turbine', 'The Plasma Turbine', 'kubejs:plasma_turbine', (scene, util) => {
        // Show base plate
        scene.world.showSection([0, 0, 0, 4, 0, 5], Facing.DOWN);
        scene.idle(10);

        // Build
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
            .text(60, 'Fluid Input Hatches can only go on the front', [2.0, 1.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Rotate 180
        for (let degree = 0; degree <= 180; degree++) {
            scene.rotateCameraY(1);
            if(degree % 6 == 0) scene.idle(1);
        }

        scene
            .text(60, 'The Energy Output Hatch goes in the back middle block', [2.0, 2.0, 4.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);
    });
});