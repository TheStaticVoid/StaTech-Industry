// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:core_drill').scene('core_mining_drill', 'The Core Mining Drill', 'kubejs:core_mining_drill', (scene, util) => {
        scene.setSceneOffsetY(-5.0);
        scene.scaleSceneView(0.5);
        let size = structureSize(16, 13, 16);
        showBasePlate(scene, size.width, size.depth);

        // Build the base
        buildUpToYFast(scene, size.width, size.depth, 9);
        addText(scene, 120, 'The center 2x2 is made of quarry tubes', PonderPalette.WHITE, [7.0, 10.0, 7.0]);

        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 9, 13, 1);
        addText(scene, 120, 'Hatches can only be placed on the edge of the first layer on the top', PonderPalette.WHITE, [4.0, 10.0, 7.0]);
    });
});