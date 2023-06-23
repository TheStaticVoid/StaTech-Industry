Ponder.registry((event) => {
    event.create('modern_industrialization:space_probe_launcher').scene('space_probe_launcher', 'The Space Probe Launcher', 'kubejs:space_probe_launcher', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.8);
        // Show base plate
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);
        scene.idle(10);

        // Build the first two layers
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The center is Machine Pipe Casings', [3.0, 3.0, 3.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        scene
            .text(60, 'The controller goes in the middle', [3.0, 3.0, 2.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Build the rest
        for (let y = 3; y < 10; y++ ) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(120, 'Hatches only go on the edges', [1.0, 4.0, 3.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);
    });
});