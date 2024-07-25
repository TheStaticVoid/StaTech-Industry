// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:electric_quarry').scene('electric_quarry', 'The Electric Quarry', 'kubejs:electric_quarry', (scene, util) => {
        let size = structureSize(5, 7, 5);
        showBasePlate(scene, size.width, size.depth);

        // First Layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'The Chain goes in the center of the multiblock', PonderPalette.WHITE, [2.0, 2.0, 2.0]);

        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 2, 7, 3);
        addText(scene, 100, 'The only differences between the Steam counterpart is needing an Energy Input Hatch', PonderPalette.BLUE, [3.0, 3.0, 1.0]);
    })
})