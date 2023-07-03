Ponder.registry((event) => {
    event.create('modern_industrialization:singularity_forge').scene('singularity_forge', 'The Quasi Quantum Singularity Forge', 'kubejs:singularity_forge', (scene, util) => {
        scene.setSceneOffsetY(-8.0);
        scene.scaleSceneView(0.4);

        // Show base plate
        scene.world.showSection([0, 0, 0, 18, 0, 18], Facing.DOWN);
        scene.idle(10);

        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 19; x++) {
                for (let z = 0; z < 19; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene
            .text(120, 'Hatches can only go on the same layer as the controller', [6.0, 3.0, 8.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);

        for (let y = 3; y < 19; y++) {
            for (let x = 0; x < 19; x++) {
                for (let z = 0; z < 19; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene
            .text(120, 'You\'re going to want to use the wrench preview for this one', [5.0, 3.0, 8.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);
    });
})