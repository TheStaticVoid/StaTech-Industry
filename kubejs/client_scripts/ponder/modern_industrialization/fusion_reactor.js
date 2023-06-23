Ponder.registry((event) => {
    event.create('modern_industrialization:fusion_reactor').scene('fusion_reactor', 'The Fusion Reactor', 'kubejs:fusion_reactor', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.6);
        // Show base plate
        scene.world.showSection([0, 0, 0, 16, 0, 16], Facing.DOWN);
        scene.idle(10);

        // First two layers
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 17; x++) {
                for (let z = 0; z < 17; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The internals of the rings are made of Fusion Chamber blocks', [6.0, 3.0, 4.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Final layer
        for (let x = 0; x < 17; x++) {
            for (let z = 0; z < 17; z++) {
                scene.world.showSection([x, 3, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        
        scene
            .text(120, 'Hatches can only go on the center block on each side of the ring', [8.0, 4.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);
    });
});