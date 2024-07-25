// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:space_probe_launcher').scene('space_probe_launcher', 'The Space Probe Launcher', 'kubejs:space_probe_launcher', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.8);
        let size = structureSize(7, 10, 7);
        showBasePlate(scene, size.width, size.depth);

        // Build the first two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The center is Machine Pipe Casings', PonderPalette.WHITE, [3.0, 3.0, 3.0]);
        addText(scene, 60, 'The controller goes in the middle', PonderPalette.BLUE, [3.0, 3.0, 2.0]);

        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 3, 10, 1);
        addText(scene, 120, 'Hatches only go on the edges', PonderPalette.WHITE, [1.0, 4.0, 3.0]);
    });
});