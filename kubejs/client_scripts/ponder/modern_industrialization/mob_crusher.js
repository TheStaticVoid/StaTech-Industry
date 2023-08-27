// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:mob_crusher').scene('mob_crusher', 'The Industrial Mob Crusher', 'kubejs:mob_crusher', (scene, util) => { 
        scene.scaleSceneView(0.9);
        let size = structureSize(7, 6, 7);
        showBasePlate(scene, size.width, size.depth);

        // Build the multiblock
        buildUpToYRegular(scene, size.width, size.depth, 4);
        addText(scene, 100, 'The center of this multiblock is hollow', PonderPalette.WHITE, [3.0, 4.0, 3.0]);
        buildUpSlice(scene, size.width, size.depth, 4, 7, 1);
    });
});