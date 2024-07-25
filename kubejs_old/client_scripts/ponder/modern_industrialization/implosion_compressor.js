// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:implosion_compressor').scene('implosion_compressor', 'The Implosion Compressor', 'kubejs:implosion_compressor', (scene, util) => {
        let size = structureSize(5, 6, 5);
        showBasePlate(scene, size.width, size.depth);

        // Build the first layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'Hatches can only go on the bottom layer', PonderPalette.WHITE, [1.0, 2.0, 1.0]);
        
        // Next two layers
        buildUpSlice(scene, size.width, size.depth, 2, 4, 3);
        addText(scene, 60, 'The inside is hollow', PonderPalette.WHITE, [2.0, 4.0, 2.0]);
        
        // The final layer
        buildUpSlice(scene, size.width, size.depth, 4, 4, 3);
    });
});