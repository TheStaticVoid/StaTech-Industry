Ponder.registry((event) => {
    event.create('modern_industrialization:pressurizer').scene('pressurizer', 'The Pressurizer', 'kubejs:pressurizer', (scene, util) => {
        // Base plate
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);

        // First layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'Only the Fluid Output Hatch and Energy Input Hatch are allowed on the bottom layer', [2.0, 1.0, 2.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // Rest of the layers
        for (let y = 2; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'Only the Fluid Input Hatch is allowed on the top layer', [2.0, 4.0, 2.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);
    });
});