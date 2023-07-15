// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:core_drill').scene('core_mining_drill', 'The Core Mining Drill', 'kubejs:core_mining_drill', (scene, util) => {
        scene.setSceneOffsetY(-5.0);
        scene.scaleSceneView(0.5);

        // Show base plate
        scene.world.showSection([0, 0, 0, 15, 0, 15], Facing.DOWN);
        scene.idle(10);

        // Build the base
        for (let y = 1; y < 9; y++) {
            for (let x = 0; x < 16; x++) {
                for (let z = 0; z < 16; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene.idle(10);

        scene   
            .text(120, 'The center 2x2 is made of Quarry Tubes', [7.0, 10.0, 7.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);

        // Build the rest
        for (let y = 9; y < 13; y++) {
            for (let x = 0; x < 16; x++) {
                for (let z = 0; z < 16; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene
            .text(120, 'Hatches can only be placed on the edge of the first layer on the top', [4.0, 10.0, 7.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);
    });
});