Ponder.registry((event) => {
    event.create('modern_industrialization:mob_crusher').scene('mob_crusher', 'The Industrial Mob Crusher', 'kubejs:mob_crusher', (scene, util) => { 
        scene.scaleSceneView(0.9);
        // Show base plate
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);
        scene.idle(10);

        // Build the multiblock
        for (let y = 1; y < 4; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene   
            .text(100, 'The center of this multiblock is hollow', [3.0, 4.0, 3.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(120);

        for (let y = 4; y < 7; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene.idle(20);
    });
});