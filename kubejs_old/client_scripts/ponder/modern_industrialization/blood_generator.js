// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:blood_generator').scene('blood_generator', 'The Blood Generator', 'kubejs:blood_generator', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.8);

        let size = structureSize(11, 12, 7);
        showBasePlate(scene, size.width, size.depth);
        // Build y=1-2
        buildUpToYFast(scene, size.width, size.depth, 3);
        addText(scene, 120, 'Hatches can replace any of the Steel Machine Casings in the structure', PonderPalette.WHITE, [4.0, 3.0, 1.0]);
        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 3, size.height, 1);
        addText(scene, 60, 'The completed structure. Remember to use the wrench preview when building it!', PonderPalette.WHITE, [5.0, 3.0, 1.0]);
    });
});