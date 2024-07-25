// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_diesel_generator').scene('large_diesel_generator', 'The Large Diesel Generator', 'kubejs:large_diesel_generator', (scene, util) => {
        let size = structureSize(5, 5, 6);
        showBasePlate(scene, size.width, size.depth);
        
        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'Fluid Input Hatches go on the sides', PonderPalette.WHITE, [1.0, 3.0, 2.0]);

        // Last layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
        addText(scene, 60, 'The complete multiblock', PonderPalette.WHITE, [2.0, 2.0, 2.0]);

        // Rotate 180
        rotateScene(scene, 180);
        addText(scene, 60, 'The Energy Output Hatch goes in the center back block', PonderPalette.WHITE, [2.0, 2.0, 4.0]);
    });
});