// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:boss_crusher').scene('boss_crusher', 'The Boss Crusher', 'kubejs:boss_crusher', (scene, util) => {
        let size = structureSize(7, 7, 7);
        
        // Bottom layer
        showBasePlate(scene, size.width, size.depth);

        // Build the entire multi
        buildUpToYRegular(scene, size.width, size.depth, size.height);
        addText(scene, 60, 'Hatches can only go on the top or bottom', PonderPalette.WHITE, [2.0, 2.0, 1.0]);
    });
})