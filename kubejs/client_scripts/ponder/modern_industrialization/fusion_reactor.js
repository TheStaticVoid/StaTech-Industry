// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:fusion_reactor').scene('fusion_reactor', 'The Fusion Reactor', 'kubejs:fusion_reactor', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.6);
        let size = structureSize(17, 6, 17);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The internals of the rings are made of Fusion Chamber blocks', PonderPalette.WHITE, [6.0, 3.0, 4.0]);

        // Final layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
        addText(scene, 120, 'Hatches can only go on the center block on each side of the ring', PonderPalette.WHITE, [8.0, 4.0, 1.0]);
    });
});