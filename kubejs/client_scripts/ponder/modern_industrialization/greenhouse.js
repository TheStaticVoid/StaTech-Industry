// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:greenhouse').scene('greenhouse', 'The Industrial Greenhouse', 'kubejs:industrial_greenhouse', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.8);
        let size = structureSize(9, 9, 9);
        showBasePlate(scene, size.width, size.depth);

        // Build the first layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 80, 'The center block is a dirt block. This will go directly under the logs', PonderPalette.WHITE, [4.0, 3.0, 4.0]);
        addText(scene, 80, 'Hatches can only replace the Steel Machine Casings on the first layer', PonderPalette.WHITE, [3.0, 3.0, 1.0]);

        // Build layer 2 - 5
        buildUpSlice(scene, size.width, size.depth, 2, 6, 3);
        addText(scene, 80, 'The logs must be oak for the multiblock. They do not determine which recipe can be run in the multiblock.', PonderPalette.WHITE, [4.0, 6.0, 4.0]);
        
        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 6, 9, 3);
    });
});