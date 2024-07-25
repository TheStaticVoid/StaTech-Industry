// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:steam_quarry').scene('steam_quarry', 'The Steam Quarry', 'kubejs:steam_quarry', (scene, util) => {
        let size = structureSize(5, 7, 5);
        showBasePlate(scene, size.width, size.depth);

        // First Layer
        buildUpToYRegular(scene, size.width, size.depth, 1);
        addText(scene, 60, 'The Chain goes in the center of the multiblock', PonderPalette.WHITE, [2.0, 2.0, 2.0]);

        // Second Layer
        buildUpSlice(scene, size.width, size.depth, 2, 7, 3);
    });
});