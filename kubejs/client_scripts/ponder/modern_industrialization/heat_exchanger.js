Ponder.registry((event) => {
    event.create('modern_industrialization:heat_exchanger').scene('heat_exchanger', 'The Heat Exchanger', 'kubejs:heat_exchanger', (scene, util) => {
        // Show base
        scene.world.showSection([0, 0, 0, 5, 0, 7], Facing.DOWN);
        scene.idle(20);

        // Build
        for (let y = 1; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'Input Hatches go on the right side (always from your perspective)', [1.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        scene
            .text(60, 'Output Hatches go on the left side (always from your perspective)', [3.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        scene
            .text(60, 'Energy Input always goes along the center line', [2.0, 4.0, 1.0])
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
            .text(60, 'Input Hatch still on the right side (from your perspective)', [3.0, 1.0, 5.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        scene
            .text(60, 'Output Hatch still on the left side (from your perspective)', [1.0, 1.0, 5.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);
    });
});