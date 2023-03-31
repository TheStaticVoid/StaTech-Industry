Ponder.registry((event) => {
    event.create('modern_industrialization:distillation_tower').scene('distillation_tower', 'The Distillation Tower', 'kubejs:distillation_tower', (scene, util) => {
        scene.setSceneOffsetY(-3.0);
        scene.scaleSceneView(0.7);
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
            .text(60, 'Energy Input Hatches can only go on the bottom layer', [3.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(60);

        // Second layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 2, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'Center block is Stainless Steel Pipe Machine Casing', [2.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(70);
        scene
            .text(120, 'The output fluid is determined by the layer. In REI the first output fluid corresponds to the first layer, and so on.', [1.0, 3.0, 1.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(130);
        scene
            .text(180, 'This is the minimum size Distillation Tower. You can increase size by adding more layers and updating the value in the controller. If you have a one high tower and three outputs, the last two outputs will voided', [2.0, 4.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(190);

        // The rest of the layers
        for (let y = 3; y < 9; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(120, 'At 10 blocks tall, this is the maximum size Distillation Tower, offering up to nine different fluid outputs', [2.0, 6.0, 2.0])
            .colored(PonderPalette.WHITE)
            .attachKeyFrame();
        scene.idle(120);
    });
});