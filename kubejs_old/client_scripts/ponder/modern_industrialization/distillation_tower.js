// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:distillation_tower').scene('distillation_tower', 'The Distillation Tower', 'kubejs:distillation_tower', (scene, util) => {
        scene.setSceneOffsetY(-3.0);
        scene.scaleSceneView(0.7);
        let size = structureSize(5, 12, 5);
        showBasePlate(scene, size.width, size.depth);

        // First layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'Energy Input Hatches can only go on the bottom layer', PonderPalette.WHITE, [3.0, 2.0, 1.0]);

        // Second layer
        buildUpSlice(scene, size.width, size.depth, 2, 2, 3);
        addText(scene, 60, 'Center block is Stainless Steel Pipe Machine Casing', PonderPalette.WHITE, [2.0, 3.0, 2.0]);
        addText(scene, 120, 'The output fluid is determined by the layer. In REI the first output fluid corresponds to the first layer, and so on.', PonderPalette.BLUE, [1.0, 3.0, 1.0]);
        addText(scene, 180, 'This is the minimum size Distillation Tower. You can increase size by adding more layers and updating the value in the controller. If you have a two high controller, and three outputs, the last two outpus will be voided', PonderPalette.WHITE, [2.0, 4.0, 2.0]);

        // The rest of the layers
        buildUpSlice(scene, size.width, size.depth, 3, 9, 3);
        addText(scene, 120, 'At 10 blocks tall, this is the maximum size Distillation Tower, offering up to nine different fluid outputs', PonderPalette.WHITE, [2.0, 6.0, 2.0]);
    });
});