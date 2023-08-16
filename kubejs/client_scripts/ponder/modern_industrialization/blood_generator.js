// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:blood_generator').scene('blood_generator', 'The Blood Generator', 'kubejs:blood_generator', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.8);
        // Bottom layer
        for (let x = 0; x < 12; x++) {
            for (let z = 0; z < 8; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        // Build y=1-2
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 12; x++) {
                for (let z = 0; z < 12; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene
            .text(120, 'Hatches can be replace any of the Steel Machine Casings in the structure', [4.0, 3.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);

        // Build the rest
        for (let y = 3; y < 12; y++) {
            for (let x = 0; x < 12; x++) {
                for (let z = 0; z < 12; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The completed structure. Remember to use the wrench preview when building it!', [5.0, 3.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);
    });
});