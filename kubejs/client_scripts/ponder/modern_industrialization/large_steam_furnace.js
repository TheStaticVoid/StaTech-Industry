// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_steam_furnace').scene('large_steam_furnace', 'The Large Steam Furnace', 'kubejs:large_steam_furnace', (scene, util) => {
        let size = structureSize(5, 5, 5);
        showBasePlate(scene, size.width, size.depth);

        // First two layers                
        buildUpToYRegular(scene, size.width, size.depth, 3);
        addText(scene, 60, 'The center is hollow', PonderPalette.WHITE, [2.0, 3.0, 2.0]);

        // Build the rest
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
    });
});